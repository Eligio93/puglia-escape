import Link from "next/link";
import Image from "next/image";
import style from '@/styles/post.module.css'

import { BLOCKS, INLINES } from "@contentful/rich-text-types";

export const options = {
    renderNode: {
        //external link
        [INLINES.HYPERLINK]: (node, children) => <a href={node.data.uri} target="_blank">{children}</a>,
        //adds an internal hyperlink
        [INLINES.ENTRY_HYPERLINK]: (node, children) => <Link href={'/posts/' + node.data.target.fields.postSlug}>{children}</Link>
        ,
        //adds a body image
        [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
            if (node.data.target.fields.file.contentType.includes('image')) {
                return (
                    <div className={style.embeddedImage}>
                        <Image
                            src={'https:' + node.data.target.fields.file.url}
                            alt={node.data.target.fields.description}
                            height={node.data.target.fields.file.details.image.height}
                            width={node.data.target.fields.file.details.image.width}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                )
            }


        }
    }
}