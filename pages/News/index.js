
export default function NewsList({news}){

    return(
        <div>
            <h1>Here are the list of news for today:</h1>
            {
                news.map((info)=>{
                    return(
                        <div key={info}>

                            <h2>{info.id}){info.title}  "{info.description}"</h2>
                            <hr/>

                        </div>
                    )
                })

            }

        </div>
    )
}


export async function getServerSideProps(){

    const response=  await fetch("http://localhost:4000/Weather")
    const data = await response.json()

    return {
        props: {
            news:data
        }
    }
}




