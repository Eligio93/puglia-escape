const contentful = require('contentful')

export const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})
//get all posts and in case filter them by category and city
export async function getPosts(category = null, city = null) {
    if (!category && !city) {
        const response = await client.getEntries({ content_type: 'blogPost', order: '-sys.createdAt' })
        return response
    } else if (category && city) {
        const response = await client.getEntries({
            content_type: 'blogPost',
            'metadata.tags.sys.id[in]': [category, city],
            order: '-sys.createdAt'
        })
        return response
    } else if (city) {
        const response = await client.getEntries({
            content_type: 'blogPost',
            'metadata.tags.sys.id[in]': [city],
            order: '-sys.createdAt'
        })
        return response
    } else if (category) {
        const response = await client.getEntries({
            content_type: 'blogPost',
            'metadata.tags.sys.id[in]': [category],
            order: '-sys.createdAt'
        })
        return response
    }

}
//get tags to set Categories and Cities
export async function getTags() {
    const response = await client.getTags()
    return response
}

//get the post with a particular slug
export async function getPostBySlug(slug) {
    const response = await client.getEntries({ content_type: 'blogPost', 'fields.postSlug': slug })
    return response
}
//get featured posts
export async function getFeaturedPosts() {
    const response = await client.getEntries({ content_type: 'blogPost',limit:5, order: '-sys.createdAt', 'metadata.tags.sys.id[in]': ['featured'] })
    return response
}

//get posts by search value

export async function getPostsBySearch(search) {
    const response = await client.getEntries({ content_type: 'blogPost', 'fields.postTitle[match]': search, order: '-sys.createdAt' })
    return response
}