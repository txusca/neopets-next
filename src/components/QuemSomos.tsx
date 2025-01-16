import Image from 'next/image';

import quemSomos from '/public/quem-somos-img.png';

type QuemSomosProps = {
  className?: string;
}

export default function QuemSomos(props: QuemSomosProps) {
  return (
    <div className={`${props.className}`}>
      <Image
        src={quemSomos}
        alt="Quem somos photo"
        className="w-full md:w-1/2"
      />
      <div className="w-full md:w-1/2 p-4">
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
