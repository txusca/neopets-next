import Image from 'next/image';

import bannerWeb from '/public/banner web.svg';
import bannerMobile from '/public/mobile.svg';

type QuemSomosProps = {
  className?: string;
}

export default function QuemSomos(props: QuemSomosProps) {
  return (
    <div className={`${props.className} relative`}>
      <Image className='md:inline hidden w-[90%] h-auto' src={bannerWeb} alt='Banner gatinho'/>
      <Image className='inline md:hidden' src={bannerMobile} alt='Banner gatinho'/>
      <div className="w-full md:w-1/2 p-4 xl:-ml-80 md:-ml-56">
        <h1 className="text-4xl md:text-7xl text-center text-mainColor font-extrabold pb-10">
          QUEM SOMOS
        </h1>
        <p className="text-lg text-mainColor text-center">
          Aqui na NeoPets somos apaixonados por cuidar dos seus animais de
          estimação, oferecendo alimentos premium, brinquedos e serviços de
          grooming de alta qualidade. Junte-se a nós para uma jornada de
          diversão e amor com seu peludo!
        </p>
      </div>
    </div>
  );
}
