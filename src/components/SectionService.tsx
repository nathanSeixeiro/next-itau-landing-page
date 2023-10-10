import Image from 'next/image';
import { ItemList } from './ItemList';
import { Container } from "./Container";

import PhoneImage from '@/assets/phone.png'
import CardIcon from '@/assets/icon-card.svg'
import PhoneIcon from '@/assets/icon-phone.svg'
import SolutionsIcon from '@/assets/icon-solutions.svg'
import OptionsIcon from '@/assets/icon-options.svg'

export function SectionService() {
    return (
        <section className="relative w-full h-[965px] mx-auto px-8">
            <Container>
                <div className="flex-1 max-w-[594px] pt-32">
                    <span className="block text-primary-orange text-sm font-semibold uppercase mb-9">
                        Serviços exclusivos
                    </span>
                    <h2 className="text-primary-gray text-[56px] font-bold leading-tight mb-6">
                        Gerencie suas finanças sem sair de casa
                    </h2>
                    <p className="text-lg max-w-[554px] mb-16 text-second-gray">
                        veja como você pode cuidar das suas finanças pelo app do Itaú de forma segura, rápida e o melhor, no conforto da sua casa.
                    </p>
                    <ul className='flex flex-col gap-9'>
                        <ItemList
                            icon={PhoneIcon}
                            altMsg="phone icon"
                            text="Acompanhar sua conta, fazer transferências e pagamentos de onde estiver"
                        />
                        <ItemList
                            icon={SolutionsIcon}
                            altMsg="phone icon"
                            text="Soluções de empréstimos e renegociação para organizar sua finanças"
                        />
                        <ItemList
                            icon={OptionsIcon}
                            altMsg="phone icon"
                            text="Diversas opções de investimentos, de acordo como seu perfil de investidor"
                        />
                        <ItemList
                            icon={CardIcon}
                            altMsg="phone icon"
                            text="Acompanhe a fatura do cartão de crédito e faça compras online com seu cartão virtual"
                        />
                    </ul>
                </div>
            </Container>
            <div className='absolute top-0 right-0 w-[32%] h-full bg-gray-phone flex items-center'>
                <Image 
                className='translate-x-[-50%]'
                src={PhoneImage}
                alt='phone image'
                />
            </div>
        </section>
    );
}