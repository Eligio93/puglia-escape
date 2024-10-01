import Link from "next/link";

import { BLOCKS, INLINES } from "@contentful/rich-text-types";

export const options = {
    renderNode:{
        [INLINES.ENTRY_HYPERLINK]:(node,children) => <Link href={'/posts/'+node.data.target.fields.postSlug}>{node.content[0].value}</Link>
    }
}