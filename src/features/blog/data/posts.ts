import fs from "fs";
import matter from "gray-matter";
import path from "path";

import type { Post, PostMetadata } from "@/features/blog/types/post";

function parseFrontmatter(fileContent: string) {
  const file = matter(fileContent);

  return {
    metadata: file.data as PostMetadata,
    content: file.content,
  };
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);

  return mdxFiles.map<Post>((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));

    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

import { getHashnodePosts } from "@/lib/hashnode";

export async function getAllPosts(): Promise<Post[]> {
  const hashnodePosts = await getHashnodePosts();

  // Fetch local MDX posts (mostly for components documentation)
  const localContentDir = path.join(process.cwd(), "src/features/blog/content");
  const localPosts = getMDXData(localContentDir);

  const allPosts = [...localPosts, ...hashnodePosts];

  if (allPosts.length === 0) {
    return [
      {
        slug: "hashnode-profile",
        content: "",
        metadata: {
          title: "Visit my Tech Blog on Hashnode",
          description: "I write about Fullstack Development, System Design, and my journey as a developer.",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1611242318625/p_1x3W2-W.png?auto=compress,format&format=webp",
          externalUrl: "https://muteeb.hashnode.dev/",
          pinned: true,
        },
      },
    ];
  }

  // Sort by date desc
  return allPosts.sort((a, b) => {
    return new Date(b.metadata.createdAt).getTime() - new Date(a.metadata.createdAt).getTime();
  });
}

export async function getPostBySlug(slug: string) {
  const posts = await getAllPosts();
  return posts.find((post: Post) => post.slug === slug);
}

export async function getPostsByCategory(category: string) {
  const posts = await getAllPosts();
  return posts.filter((post: Post) => post.metadata?.category === category);
}

export async function findNeighbour(posts: Post[], slug: string) {
  const len = posts.length;

  for (let i = 0; i < len; ++i) {
    if (posts[i].slug === slug) {
      return {
        previous: i > 0 ? posts[i - 1] : null,
        next: i < len - 1 ? posts[i + 1] : null,
      };
    }
  }

  return { previous: null, next: null };
}
