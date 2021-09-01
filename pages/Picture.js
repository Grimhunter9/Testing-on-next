import Image from "next/image"

export default function Picture() {

    return (
        <div>

            <Image src="/logo.jpg" alt="" width={200} height={200} />


        </div>
    )

}

Picture.Layout = function pageLayout(page) {

    return (
        <>
            {page}
        </>
    )
}




