import { useRouter } from "next/router"
export default function post({ content }) {

    const router= useRouter()
    
    if(router.isFallback){
        return<h1>Loading...</h1>
    }

    return (
        <>
            <h2>{content.id} {content.title}</h2>
            <p>{content.body}</p>
        </>
    )
}



export async function getStaticPaths() {
    /*const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()
    const paths = data.map((post) => {

        return {
            
                params: {
                    PostId: `${post.id}`,
                },  
        }
    })

    return {
        paths,
        fallback: false,
    }*/

    return {
       paths: [
             /*{
                params: { PostId: "1" },
                
            },

            {
                params: { PostId: "2" },
            },


            {
                params: { PostId: "3" },
            },*/
        ],

        fallback: true
    }
}


export async function getStaticProps(context) {

    const { params } = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.PostId}`)
    const data = await response.json()

    return {
        props: {
            content: data
        },
    }
}
