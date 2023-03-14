import type { APIRoute } from "astro";

import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export const get: APIRoute = async function get({ site }) {
  if (!site) throw new Error("no site");

  const submissions = await getCollection("submissions");

  return rss({
    title: "textjam winter2023 - submissions",
    description: "submissions to the winter 2023 textjam",
    site: site.toString(),
    items: submissions.map(({ slug, data }) => ({
      title: `${data.title} by ${data.creator}`,
      pubDate: data.updated,
      link: `${import.meta.env.BASE_URL}submissions/${slug}/`,
    })),
  });
};
