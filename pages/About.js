import Footer from "./components/Footer"

export default function About() {

    return (
        <div>

            <strong style={{ fontSize: "5vw" }}>•About</strong>

        </div>
    )

}
 
About.Layout = function pageLayout(page) {

    return (
        <>
            {page}
            <Footer />
        </>
    )
}




