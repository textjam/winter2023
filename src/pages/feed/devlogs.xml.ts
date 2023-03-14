import type { APIRoute } from "astro";

import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export const get: APIRoute = async function get({ site }) {
  if (!site) throw new Error("no site");

  const devlogs = await getCollection("devlogs");

  return rss({
    title: "textjam winter2023 - devlogs",
    description: "all devlogs from the winter 2023 textjam",
    site: site.toString(),
    items: devlogs.map(({ slug, data }) => ({
      title: `${slug.split("/")[0]} devlog - ${data.title}`,
      pubDate: data.date,
      link: `${import.meta.env.BASE_URL}devlogs/${slug}/`,
    })),
  });
};
