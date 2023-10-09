import Image from 'next/image'

import { ItemMenu } from './ItemMenu'
import { Search } from './Search'

import Logo from '@/assets/logo.svg'
import IconUser from '@/assets/icon-user.svg'
import { Container } from './Container'

export function Header() {
    return (
        <header className="relative flex items-center w-full h-20 bg-primary-orange">
            <Container>
                <div className='flex items-center justify-between gap-16'>
                    <div className='flex flex-1 items-center gap-14 justify-end'>
                        <Image
                            src={Logo}
                            alt="Itau logo"
                        />
                        <ul className='flex items-center gap-10'>
                            <li>
                                <ItemMenu name='Para você' />
                            </li>
                            <li>
                                <ItemMenu name='Para empresas' />
                            </li>
                            <li>
                                <ItemMenu name='Serviços' />
                            </li>
                            <li>
                                <ItemMenu name='Ajuda' />
                            </li>
                        </ul>
                    </div>
                    <Search />
                </div>
                <div className='absolute top-0 right-[15px] w-60  bg-primary-blue' >
                    <button className='flex items-center gap-4 h-20 pl-10'>
                        <Image
                            src={IconUser}
                            alt='icon user'
                        />
                        <span className='text-white font-bold'>Acessar conta</span>
                    </button>
                </div>
            </Container>
        </header >
    )
}