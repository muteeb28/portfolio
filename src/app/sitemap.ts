import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/config/site";
import { getAllPosts, getPostsByCategory } from "@/features/blog/data/posts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allPosts = await getAllPosts();
  const posts = allPosts.map((post) => ({
    url: `${SITE_INFO.url}/blog/${post.slug}`,
    lastModified: new Date(post.metadata.updatedAt).toISOString(),
  }));

  const componentPosts = await getPostsByCategory("components");
  const components = componentPosts.map((post) => ({
    url: `${SITE_INFO.url}/components/${post.slug}`,
    lastModified: new Date(post.metadata.updatedAt).toISOString(),
  }));

  const routes = ["", "/blog", "/components"].map((route) => ({
    url: `${SITE_INFO.url}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...posts, ...components];
}
