import Link from "next/link"

export default function Postlist({ List }) {

    return (
        <>
            {
                List.map((post) => {
                    return (

                        <div key={post.id}>
                            <Link href={`Posts/${post.id}`} passHref >

                                <h2 style={{ cursor: "pointer" }}>{post.id}) {post.title}</h2>

                            </Link>
                            <hr />


                        </div>
                    )

                })
            }
        </>
    )


}

export async function getStaticProps() {

    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()


    return {
        props: {
            List: data,
        },
    }

}

