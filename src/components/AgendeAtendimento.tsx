import gatinhos from '/public/gatinhos.png';
import cachorro from '/public/cachorro-de-pe.svg';
import gatinho from '/public/gatinho.png';
import wpp from '/public/wpp-button.svg';
import Image from 'next/image';
import Link from 'next/link';

type AgendeAtendimentoProps = {
  className?: string;
};

export default function AgendeAtendimento(props: AgendeAtendimentoProps) {
  return (
    <div className={`${props.className}`}>
      <Image
        className="xl:-mb-0 md:-mb-6 -mb-3 scale-[0.6] xl:scale-[1]"
        src={gatinhos}
        alt="Gatinhos e cachorro"
      />
      <div className="bg-background flex items-center justify-center xl:rounded-[34px] flex-wrap p-5 overflow-x-hidden">
        <Image
          className="md:ml-16 xl:order-1 order-2"
          src={cachorro}
          alt="Cachorro de pé"
        />
        <div className="flex flex-col items-start xl:order-2 order-1">
          <h3 className="text-[28px] text-mainColor font-medium text-center">
            Agende seu atendimento
          </h3>
          <p className="whitespace-pre-line leading-normal max-w-[300px] text-mainColor text-center">
            Faça o melhor para o seu melhor amigo! Agende agora mesmo o
            atendimento do seu pet com apenas um clique. Nossa equipe está
            pronta para cuidar com carinho e dedicação.
          </p>
          <Link href={'https://wa.me/+5538997413703'} target='_blank'>
            <div className="flex md:w-[294px] md:h-[84px] w-72 h-20 bg-green-400 rounded-2xl text-white justify-center items-center text-3xl font-normal cursor-pointer">
              Fale conosco
              <Image className="ml-[30px]" src={wpp} alt="Whatsapp icon" />
            </div>
          </Link>
        </div>
        <Image
          className="relative ml-auto -mt-[-200px] mr-6 self-end xl:inline hidden md:order-3"
          src={gatinho}
          alt="Gatinho deitado"
        />
      </div>
    </div>
  );
}
