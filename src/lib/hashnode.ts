import { Post } from "@/features/blog/types/post";

const HASHNODE_GQL_ENDPOINT = "https://gql.hashnode.com/";
const HASHNODE_HOST = "muteeb.hashnode.dev"; // User's Hashnode domain

export async function getHashnodePosts(): Promise<Post[]> {
  const query = `
    query Publication {
      publication(host: "${HASHNODE_HOST}") {
        posts(first: 6) {
          edges {
            node {
              title
              brief
              slug
              coverImage {
                url
              }
              publishedAt
              url
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(HASHNODE_GQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    const responseJson = await response.json();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data } = responseJson as any;

    if (!data?.publication?.posts?.edges) {
      console.error("No posts found or error in Slashnode response");
      return [];
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.publication.posts.edges.map(({ node }: any) => ({
      slug: node.slug,
      content: "", // Content not needed for preview
      metadata: {
        title: node.title,
        description: node.brief,
        image: node.coverImage?.url,
        createdAt: node.publishedAt,
        updatedAt: node.publishedAt,
        externalUrl: node.url,
        pinned: false,
      },
    }));
  } catch (error) {
    console.error("Failed to fetch Hashnode posts:", error);
    return [];
  }
}
