import type { APIRoute } from "astro";

import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export const get: APIRoute = async function get({ site }) {
  if (!site) throw new Error("no site");

  const updates = await getCollection("updates");

  return rss({
    title: "textjam winter2023 - updates",
    description: "updates from the winter 2023 textjam",
    site: site.toString(),
    items: updates.map(({ slug, data }) => ({
      title: data.title,
      pubDate: data.date,
      link: `${import.meta.env.BASE_URL}updates/${slug}/`,
    })),
  });
};
