import { client } from "@/config/contentful/client";
import PageSection from "../PageSection";
import PageSectionTitle from "../ui/PageSectionTitle";
import LatestPostCard from "./LatestPostCard";
import Link from "next/link";

export default async function LatestBlogPosts() {
  const response = await client.getEntries({
    content_type: "blogPost",
    limit: 3,
    order: "-sys.createdAt", // order the results from the last blog post created
  });

  return (
    <PageSection>
      <div className="flex flex-col items-center gap-3">
        <PageSectionTitle title="Latest Blog Posts from Puglia" />
        <p className="font-dm-sans text-terracotta text-center text-sm uppercase italic lg:max-w-3/4 lg:text-lg">
          Journey through our curated insights and tales that capture the true
          essence of Puglia, inviting you to explore, savor, and connect with
          its soul.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {response.items.map((post) => {
          return <LatestPostCard key={post.sys.id} post={post} />;
        })}
      </div>
      <div className="flex justify-center">
        <Link
          href="/blog"
          className="bg-terracotta hover:cur rounded-sm p-2 text-sm font-semibold text-white"
        >
          Read all blog posts
        </Link>
      </div>
    </PageSection>
  );
}
