import Image from "next/image";

type StoreProps = {
    img: any,
    title: string
}

export function Store({img, title}: StoreProps){
    return(
        <button>
            <Image src={img} alt={title} />
        </button>
    )
}