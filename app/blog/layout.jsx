import { getTags } from "@/config/contentful/client"
import FilterBar from "@/components/Blog/FilterBar"
import Link from "next/link"
export default async function BlogLayout({ children }) {
    const tags = await getTags()
    return (
        <div className="blogLayout">
            <FilterBar
                tags={tags} />
            {children}
        </div>
    )
}