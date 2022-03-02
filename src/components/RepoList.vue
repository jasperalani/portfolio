<template>

  <div class="container">

    <div class="box">

      <div class="content">

        <h3>Github Projects</h3>

        <ul>

          <li
              :class="getRepos.selectedIndex === key ? 'selected': ''"
              v-for="(repo,key) in getRepos.list"
              :key="key"
              @click.stop="selectRepo(key)"
          >
            <div class="title">
              {{ repo.title }}
            </div>
            <div class="sub-content">
              <div class="language">
                {{ repo.meta.language }}
              </div>
            </div>
          </li>


        </ul>

      </div>

      <div class="actions">
        <div class="info">
          <div class="description">
            {{ getRepos.list[getRepos.selectedIndex].meta.description }}
          </div>
          <div class="meta">
            <div class="stars">
              Stars: {{ getRepos.list[getRepos.selectedIndex].meta.stars }}
            </div>
            <div class="forks">
              Forks: {{ getRepos.list[getRepos.selectedIndex].meta.forks }}
            </div>
            <div class="watchers">
              Watchers: {{ getRepos.list[getRepos.selectedIndex].meta.watchers }}
            </div>
          </div>
        </div>
        <a :href="'https://github.com/jasperalani/' + getRepos.list[getRepos.selectedIndex].title" class="button">
          <p>View project</p>
        </a>
      </div>

    </div> <!-- .box -->

  </div> <!-- .container -->

</template>

<script>
import {mapActions, mapGetters} from "vuex";
const { Octokit } = require("@octokit/rest");

export default {
  name: 'Repos',
  methods: {
    ...mapActions(["saveRepoData"]),
    getReposFromGithub() {
      const octokit = new Octokit({
        auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
      });
      octokit.request("GET /users/jasperalani/repos").then(data => {
        let repoData = {
          selectedIndex: 0,
          list: []
        };
        for(const repo of data.data){
          repoData.list.push({
            title: repo.name,
            meta: {
              language: repo.language ?? 'Unknown',
              description: repo.description ?? repo.name,
              stars: repo.stargazers_count,
              forks: repo.forks_count,
              watchers: repo.watchers,
            }
          })
        }
        this.saveRepoData(repoData)
      });
    },
    selectRepo(key) {
      let repos = this.getRepos;
      if(repos.list[key] !== undefined) {
        repos.selectedIndex = key
        this.saveRepoData(repos)
      }
    }
  },
  beforeMount(){
    this.getReposFromGithub()
  },
  computed: {
    ...mapGetters(["getRepos"])
  },
}
</script>

<style scoped>

.container {
  display: flex;
  justify-content: center;
}

.box {
  border: 2px solid black;
  min-width: 400px;
  max-width: 400px;
}

.content {
  padding: 12px 24px;
}

.content h3 {
  font-family: "Source Code Pro", sans-serif;
  font-weight: bold;
}

ul {
  list-style-type: none;
  padding: 0;
  height: 280px;
  overflow-y: scroll;
}

li {
  border-bottom: 1px solid lightgray;
  padding: 12px 0;
}

li:last-of-type {
  border-bottom: none;
}

li.selected {
  border: 1px solid black;
}

.title, .language {
  cursor: pointer;
  font-family: "Source Code Pro", sans-serif;
}

.language, .language:before {
  content: "Language: ";
  font-size: 14px;
  font-weight: 100;
}

.actions {
  display: flex;
}

.info, .button {
  border-top: 1px solid black;
  padding: 10px;
}

.info {
  border-right: 1px solid black;
  flex-grow: 1;
}

.description {
  height: 50px;
  font-family: "Source Code Pro", sans-serif;
}

.meta {
  display: flex;
  justify-content: center;
}

.meta div {
  margin: 0 5px;
  font-family: "Source Code Pro", sans-serif;
  font-weight: 100;
}

.button {
  box-shadow: 8px 8px black;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.button:hover {
  box-shadow: 10px 10px black;
  cursor: pointer;
}

.button, .button p {
  color: black;
  text-decoration: none;
  text-transform: uppercase;
}

.button p {
  font-size: 12px;
  width: 60px;
  font-family: "Source Code Pro", sans-serif;
  font-weight: 900;
}

</style>
