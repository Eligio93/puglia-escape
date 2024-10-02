import Link from "next/link";
import Image from "next/image";

import { BLOCKS, INLINES } from "@contentful/rich-text-types";

export const options = {
    renderNode: {
        [INLINES.ENTRY_HYPERLINK]: (node, children) => <Link href={'/posts/' + node.data.target.fields.postSlug}>{node.content[0].value}</Link>,
        [BLOCKS.EMBEDDED_ASSET]: (node, children) =>
            <Image
                src={'https:' + node.data.target.fields.file.url}
                alt={node.data.target.fields.description}
                height={node.data.target.fields.file.details.image.height}
                width={node.data.target.fields.file.details.image.width}
            />
    }
}