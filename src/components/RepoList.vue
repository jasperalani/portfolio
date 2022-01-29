<template>

  <div class="container">

    <div class="box">

      <div class="content">

        <h3>Github Projects</h3>

        <ul>


          <li class="selected">
            <div class="title">
              expression-evaluator
            </div>
            <div class="sub-content">
              <div class="language">
                V
              </div>
            </div>
          </li>

          <li>
            <div class="title">
              expression-evaluator
            </div>
            <div class="sub-content">
              <div class="language">
                V
              </div>
            </div>
          </li>
          <li>
            <div class="title">
              expression-evaluator
            </div>
            <div class="sub-content">
              <div class="language">
                V
              </div>
            </div>
          </li>
          <li>
            <div class="title">
              expression-evaluator
            </div>
            <div class="sub-content">
              <div class="language">
                V
              </div>
            </div>
          </li>
          <li>
            <div class="title">
              expression-evaluator
            </div>
            <div class="sub-content">
              <div class="language">
                V
              </div>
            </div>
          </li>
          <li>
            <div class="title">
              expression-evaluator
            </div>
            <div class="sub-content">
              <div class="language">
                V
              </div>
            </div>
          </li>

          <li>
            <div class="title">
              expression-evaluator
            </div>
            <div class="sub-content">
              <div class="language">
                V
              </div>
            </div>
          </li>
          <li>
            <div class="title">
              expression-evaluator
            </div>
            <div class="sub-content">
              <div class="language">
                V
              </div>
            </div>
          </li>
          <li>
            <div class="title">
              expression-evaluator
            </div>
            <div class="sub-content">
              <div class="language">
                V
              </div>
            </div>
          </li>
          <li>
            <div class="title">
              expression-evaluator
            </div>
            <div class="sub-content">
              <div class="language">
                V
              </div>
            </div>
          </li>
          <li>
            <div class="title">
              expression-evaluator
            </div>
            <div class="sub-content">
              <div class="language">
                V
              </div>
            </div>
          </li>

          <li>
            <div class="title">
              expression-evaluator
            </div>
            <div class="sub-content">
              <div class="language">
                V
              </div>
            </div>
          </li>
          <li>
            <div class="title">
              expression-evaluator
            </div>
            <div class="sub-content">
              <div class="language">
                V
              </div>
            </div>
          </li>
          <li>
            <div class="title">
              expression-evaluator
            </div>
            <div class="sub-content">
              <div class="language">
                V
              </div>
            </div>
          </li>
          <li>
            <div class="title">
              expression-evaluator
            </div>
            <div class="sub-content">
              <div class="language">
                V
              </div>
            </div>
          </li>
          <li>
            <div class="title">
              expression-evaluator
            </div>
            <div class="sub-content">
              <div class="language">
                V
              </div>
            </div>
          </li>

          <li>
            <div class="title">
              expression-evaluator
            </div>
            <div class="sub-content">
              <div class="language">
                V
              </div>
            </div>
          </li>
          <li>
            <div class="title">
              expression-evaluator
            </div>
            <div class="sub-content">
              <div class="language">
                V
              </div>
            </div>
          </li>
          <li>
            <div class="title">
              expression-evaluator
            </div>
            <div class="sub-content">
              <div class="language">
                V
              </div>
            </div>
          </li>
          <li>
            <div class="title">
              expression-evaluator
            </div>
            <div class="sub-content">
              <div class="language">
                V
              </div>
            </div>
          </li>

        </ul>

      </div>

      <div class="actions">
        <div class="info">
          Lorem ipsum<br>
          6 Stars<br>
          7 Forks
        </div>
        <div class="buttons">
          <a href="#">View project</a>
        </div>
      </div>

    </div> <!-- .box -->

  </div> <!-- .container -->

</template>

<script>
export default {
  name: 'RepoList'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
  display: flex;
  justify-content: center;
}

.box {
  border: 2px solid black;
  /*border-radius: 10px;*/
  min-width: 300px;
  max-width: 300px;
}

.content {
  padding: 12px 24px;
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
}

.language, .language:before {
  content: "Language: ";
  font-size: 12px;
}

.actions {
  display: flex;
}

.info, .buttons {
  border-top: 1px solid black;
  padding: 10px;
}

.info {
  border-right: 1px solid black;
  flex-grow: 1;
}

.buttons {
  box-shadow: 8px 8px black;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.buttons:hover {
  box-shadow: 10px 10px black;
  cursor: pointer;
}

.buttons a {
  color: black;
  text-decoration: none;
}

</style>
