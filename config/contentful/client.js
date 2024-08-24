const contentful = require('contentful')

export const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

export async function getPosts(){
    const response = await client.getEntries({content_type:'blogPost'})
    return response
}