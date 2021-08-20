import Axios from "axios";

const base_url = "https://api.github.com";

export async function getUser(username) {
  return Axios.get(`${base_url}/users/${username}`);
}

export async function getTop5Users() {
  return new Promise((resolve) => {
    resolve({
      data: ["GrahamCampbell", "fabpot", "weierophinney", "rkh", "josh"],
    });
  });
}
