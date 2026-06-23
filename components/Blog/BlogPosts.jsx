import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

export default async function BlogPosts({ posts }) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
      {posts.length > 0 &&
        posts.map((post) => (
          <Link
            href={"/posts/" + post.fields.postSlug}
            key={post.sys.id}
            className={`group flex flex-col hover:cursor-pointer hover:shadow-lg`}
          >
            <Image
              src={"https:" + post.fields.mainImage.fields.file.url}
              alt={post.fields.mainImage.fields.description}
              height={post.fields.mainImage.fields.file.details.image.height}
              width={post.fields.mainImage.fields.file.details.image.width}
              className="h-60 w-auto rounded-t-lg object-cover"
            />
            <div className="bg-warm-stone flex flex-col gap-2.5 p-5">
              <p className="font-dm-sans text-xs text-gray-500">
                {format(post.fields.publishingDate, "MMMM dd, yyyy")}
              </p>{" "}
              {/*date needs to be formatted with date-fns*/}
              <p className="font-source-serif text-lg font-semibold">
                {post.fields.postTitle}
              </p>
              <p className="font-dm-sans line-clamp-3 text-sm">
                {post.fields.postSubtitle}
              </p>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-3">
                  <Image
                    src={
                      "https:" +
                      post.fields.postAuthor.fields.authorPicture.fields.file
                        .url
                    }
                    alt={
                      post.fields.postAuthor.fields.authorPicture.fields
                        .description
                    }
                    height={236}
                    width={236}
                    className="h-8 w-8 rounded-full"
                  />
                  <p className="font-dm-sans text-sm">
                    {post.fields.postAuthor.fields.authorName}
                  </p>
                </div>
                <p className="font-dm-sans text-xs text-gray-500">
                  {post.fields.readingTime + " min read"}
                </p>
              </div>
            </div>
          </Link>
        ))}
      {posts.length == 0 && <p>No posts found</p>}
    </div>
  );
}
