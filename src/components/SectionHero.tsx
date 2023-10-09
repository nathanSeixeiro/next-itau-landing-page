import Image from 'next/image';

import { Container } from "./Container";
import { Store } from '@/components/Store'

import WomanImage from '@/assets/woman.png'
import ArrowExplore from '@/assets/arrow-explorer.svg'
import ImageAppleStore from '@/assets/btn-apple-store.svg'
import imageGoogleStore from '@/assets/btn-google-play.svg'

export function SectionHero() {
    return (
        <section className="w-full h-[704px] bg-img_bg_hero bg-center bg-cover bg-no-repeat">
            <Container>
                <div className="flex-1 max-w-[500px] px-8">
                    <h1 className="text-white text-7xl font-bold mb-4">Tenha um banco na palma da sua mão. </h1>
                    <p className="text-white text-xl max-w-[408px] mb-8">
                        Todas as operações que você precisa em um lugar só. Simples, completo e feito para você
                    </p>
                    <div className="flex gap-4 mb-24">
                        <Store img={ImageAppleStore} title="Apple Store" />
                        <Store img={imageGoogleStore} title="google store" />
                    </div>
                    <button className='flex items-center gap-3 '>
                        <Image src={ArrowExplore} alt="explore arrow" />
                        <span className='text-white text-sm font-semibold'>Continue explorando</span>
                    </button>
                </div>
                <div>
                    <Image src={WomanImage} alt='woman picture' className='mr-[-42px]'/>
                </div>
            </Container>
        </section>
    )
}

