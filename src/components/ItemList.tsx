import Image from 'next/image';

type ItemListProps = {
    icon: any,
    altMsg: string,
    text: string
}

export function ItemList({icon, altMsg, text}:ItemListProps) {
    return (
            <li className="flex items-center gap-7 pb-9 border-b-[1px] border-opacity-gray">
                <div className="w-7 h-7 flex items-center justify-center">
                    <Image
                        src={icon}
                        alt={altMsg}
                    />
                </div>
                <p className="flex-1 text-txt-gray pr-4">
                    {text}
                </p>
            </li>
    )
}