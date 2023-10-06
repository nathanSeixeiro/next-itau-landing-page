import Image from "next/image"
import SearchIcon from '@/assets/icon-search.svg'

export function Search(){
    return(
        <div className="flex items-center gap-4">
            <Image 
                src={SearchIcon}
                alt="icon search"
            />
            <input 
                type="text"
                placeholder="Buscar"
                className="bg-transparent outline-none pr-6 text-white placeholder:text-white"
                />
        </div>
    )
}