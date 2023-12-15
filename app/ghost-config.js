import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: "https://blog.digitalnomadvisa.io",
  key: "c08950d0aa76075303df7c9841",
  version: "v5.0",
});

export async function getPosts() {
  return await api.posts
    .browse({
      include: ["tags"],
      limit: 3,
    })
    .catch((err) => {
      throw new Error(err);
    });
}
// test
