import Image from 'next/image';

import patinhas from '/public/patinhas-duplas.svg';

type PorqueEscolherProps = {
  className?: string;
};

export default function PorqueEscolher(props: PorqueEscolherProps) {
  return (
    <div className={`${props.className}`}>
      <h2 className="md:text-5xl text-2xl text-center text-nowrap text-mainColor font-bold my-5 md:my-9 ">
        Por que escolher a NeoPet’s?
      </h2>
      <div className="md:grid md:grid-cols-2 md:gap-[30px] gap-5 mt-[15px] md:ml-14 px-4">
        <div className="flex md:flex-row flex-col items-center">
          <Image className="mr-5" src={patinhas} alt="Patinhas duplas" />
          <div>
            <h3 className="text-2xl font-bold text-mainColor md:text-left text-center">
              Atendimento personalizado
            </h3>
            <div className="text-center md:text-left font-light text-mainColor">
              O PetShop oferece cuidado personalizado, orientação especializada
              e atenção meticulosa aos detalhes, promovendo laços fortes entre
              pets e seus cuidadores, assegurando que cada animal receba a
              atenção e os cuidados adequados.
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:mt-[94px] items-center mt-[15px]">
          <Image className="mr-5" src={patinhas} alt="Patinhas duplas" />
          <div>
            <h3 className="text-2xl font-bold text-mainColor md:text-left text-center">
              Ambiente confortável e seguro
            </h3>
            <div className="text-center md:text-left font-light text-mainColor">
              O PetShop proporciona um ambiente seguro e confortável para os
              animais de estimação, com espaços limpos, bem iluminados e
              ventilados, além de áreas dedicadas para socialização e
              exercícios.
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-center mt-[15px]">
          <Image className="mr-5" src={patinhas} alt="Patinhas duplas" />
          <div>
            <h3 className="text-2xl font-bold text-mainColor md:text-left text-center">
              Amor pelos pets
            </h3>
            <div className="text-center md:text-left font-light text-mainColor">
              Aqui o cuidado e respeito pelos animais são visíveis em cada
              interação e serviço. Os funcionários demonstram amor pelos pets,
              oferecendo um ambiente acolhedor, produtos de qualidade e atenção
              individualizada, garantindo que cada animal se sinta amado.
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:mt-[94px] items-center mt-[15px]">
          <Image className="mr-5" src={patinhas} alt="Patinhas duplas" />
          <div>
            <h3 className="text-2xl font-bold text-mainColor md:text-left text-center">
              Transparência
            </h3>
            <div className="text-center md:text-left font-light text-mainColor">
              Desde a divulgação transparente dos produtos e serviços até a
              comunicação aberta sobre políticas de preços e procedimentos, o
              PetShop estabelece confiança através da honestidade e integridade
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
