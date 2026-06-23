import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function LatestPostCard({ post }) {
  return (
    <Link
      href={"/posts/" + post.fields.postSlug}
      className={`group flex flex-col hover:cursor-pointer hover:shadow-lg`}
    >
      <Image
        className="h-60 w-auto rounded-t-lg"
        src={"https:" + post.fields.mainImage.fields.file.url}
        alt={post.fields.mainImage.fields.description}
        height={post.fields.mainImage.fields.file.details.image.height}
        width={post.fields.mainImage.fields.file.details.image.width}
      />
      <div className="bg-warm-stone flex flex-col gap-2.5 p-5">
        <p>{post.fields.postCategory}</p>
        <p className="font-source-serif text-lg font-semibold">
          {post.fields.postTitle}
        </p>
        <p className="font-dm-sans line-clamp-3 text-sm">
          {post.fields.postSubtitle}
        </p>
        <div className="text-terracotta flex items-center gap-1 text-xs font-semibold group-hover:underline">
          <span>Read More</span>
          <ArrowRight className="size-3" />
        </div>
      </div>
    </Link>
  );
}
