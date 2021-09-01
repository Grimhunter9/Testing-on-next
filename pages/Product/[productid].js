import { useRouter } from "next/router"
import Header from "../components/Header"

export default function details() {

    const router = useRouter()
    const Detail = router.query.productid

    return (

        <>
            <div style={{ fontSize: "5vw" }}>About our {Detail}</div>
        </>
    )
}

details.Layout = function pageLayout(page) {
    return (
        <>
            <Header />
            {page}
        </>

    )
}