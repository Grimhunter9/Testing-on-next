
import Header from  "./components/Header"

export default function Projects() {



    return (
        <div>

            <strong style={{ fontSize: "5vw" }}>•Projects</strong>

        </div>
    )

}

Projects.Layout = function pageLayout(page) {

    return (
        <>
            <Header />
            {page}
        </>
    )


}




