import { notFound } from "next/navigation";
import { headers } from "next/headers";
import { collection, query, where, getDocs } from "firebase/firestore";
import { fireDb } from "@/public/firebase"; // Adjust path if needed
import SinglePostClient from "./SinglePostClient";

async function getBlogPost(slug) {
  try {
    const q = query(collection(fireDb, "blogPost"), where("slug", "==", slug));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) return null;

    const postData = querySnapshot.docs[0].data();

    if (postData?.blogfor !== "crocto") return null;

    return {
      ...postData,
      time: postData.time?.toDate?.().toISOString() || postData.time,
    };
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

// Dynamic SEO Metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) return { title: "Post Not Found" };

  const headersList = await headers();
  const host = headersList.get("host") || "";
  const canonicalUrl = host.includes(".in")
    ? `https://www.crocto.in/blog/posts/${post.slug}`
    : `https://www.crocto.com/blog/posts/${post.slug}`;

  return {
    title: String(post.title || "crocto Blog"),
    description: post.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const postDisplay = await getBlogPost(slug);

  if (!postDisplay) {
    notFound();
  }

  return <SinglePostClient initialPost={postDisplay} slug={slug} />;
}