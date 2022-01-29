// const INITIAL_DATA_URL = "https://raw.githubusercontent.com/ayazsayyed/Vue-Projects/master/src/components/asana/boards.json"
// import axios from "axios"

export default {
  async saveRepoData({
    commit
  }, payload) {
    commit("SAVE_REPO_DATA", payload)
  },
}
