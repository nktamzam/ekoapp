import { GET_REPOS, GET_REPO_INFO, GET_USER } from "./reducer";

export function listRepos(user) {
  return {
    type: GET_REPOS,
    payload: {
      request: {
        url: `/users/${user}/repos`
      }
    }
  };
}

export function getRepoDetail(user, repo) {
  return {
    type: GET_REPO_INFO,
    payload: {
      request: {
        url: `/repos/${user}/${repo}`
      }
    }
  };
}

export function getUser(user) {
  return {
    type: GET_USER,
    payload: {
      request: {
        url: `/users/${user}`
      }
    }
  };
}
