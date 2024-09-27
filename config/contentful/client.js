const contentful = require('contentful')

export const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

export async function getPosts(category = null, city = null) {
    if (!category && !city) {
        const response = await client.getEntries({ content_type: 'blogPost' })
        return response
    } else if (category && city) {
        const response = await client.getEntries({
            content_type: 'blogPost',
            'metadata.tags.sys.id[in]': [category, city]
        })
        return response
    } else if (city) {
        const response = await client.getEntries({
            content_type: 'blogPost',
            'metadata.tags.sys.id[in]': [city]
        })
        return response
    } else if (category) {
        const response = await client.getEntries({
            content_type: 'blogPost',
            'metadata.tags.sys.id[in]': [category]
        })
        return response
    }

}
export async function getTags() {
    const response = await client.getTags()
    return response
}