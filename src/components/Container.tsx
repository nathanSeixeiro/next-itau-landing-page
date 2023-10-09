import { ReactNode } from "react"

type ContainerProps = {
    children: ReactNode
}

export function Container({children}: ContainerProps){
    return(
        <div className="flex items-center justify-between w-full max-h-[1246px] px-[15px] mx-auto">
            {children}
        </div>
    )
}