import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: "https://blog.digitalnomadvisa.io",
  key: "c08950d0aa76075303df7c9841",
  version: "v5.0",
});

export async function getPosts() {
  return await api.posts
    .browse({
      limit: "all",
    })
    .catch((e) => {
      console.error(e);
    });
}
