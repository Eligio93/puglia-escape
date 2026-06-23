const contentful = require('contentful')

export const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})
//get all posts and in case filter them by category and one or more cities
export async function getPosts(category = null, cities = []) {
    const query = { content_type: 'blogPost', order: '-sys.createdAt' }
    //a post must have the selected category (AND)
    if (category) {
        query['metadata.tags.sys.id[all]'] = [category]
    }
    //a post must belong to any of the selected cities (OR among cities)
    if (cities && cities.length) {
        query['metadata.tags.sys.id[in]'] = cities
    }
    const response = await client.getEntries(query)
    return response
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
    const response = await client.getEntries({ content_type: 'blogPost', limit: 5, order: '-sys.createdAt', 'metadata.tags.sys.id[in]': ['featured'] })
    return response
}

//get posts by search value

export async function getPostsBySearch(search) {
    const response = await client.getEntries({ content_type: 'blogPost', 'fields.postTitle[match]': search, order: '-sys.createdAt' })
    return response
}