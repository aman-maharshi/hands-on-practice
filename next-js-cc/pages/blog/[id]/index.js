import BlogArticle from "../../../components/BlogArticle"

const BlogArticlePage = ({ data }) => {
    return <BlogArticle blogArticle={data} />
}

export const getServerSideProps = async context => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const data = await response.json()

    return {
        props: {
            data
        }
    }
}

export default BlogArticlePage
