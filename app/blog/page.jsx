import { getPosts } from "@/config/contentful/client";



export default async function Blog({ searchParams }) {
    const cityQuery = searchParams.city ? 'city' + searchParams.city.split(' ').join('') : null;
    const categoryQuery = searchParams.category ? 'category' + searchParams.category.split(' ').join('') : null;
    const posts = await getPosts(categoryQuery, cityQuery);
    console.log(posts)

    //controllare i parametri e fare il get post con i parametri selezionati altrimenti gettutti i post
    return (
        <div className="blog">
            <h1>Blog</h1>

        </div>


    )
}