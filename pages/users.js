import Header from  "./components/Header"

export default function userlist({ users }) {

    return ( 
        <>
            <h1 style={{ textAlign: "center" }}>List of users and emails </h1>
            {
                users.map((user) => {
                    return (

                        <div style={{display:"flex", justifyContent:"space-evenly",}}  key={user}>
                            <ul>
                                <li>{user.name}</li>
                            </ul>
                            
                            <div>
                            <li style={{color:"green"}}>{user.email}</li>
                            </div>

                           
                        </div>
                    )

                })
            }
        </>
    )
}



export async function getStaticProps() {

    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    console.log(data)

    return {
        props: {
            users: data
        },
    }
}




