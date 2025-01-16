import Image from 'next/image';

import internacoes from '/public/internacoes.svg';
import clinica from '/public/clinica-veterinaria.svg';
import petshop from '/public/petshop.svg';
import banho from '/public/banho-tosa.svg';
import vacina from '/public/vacina.svg';
import cirurgia from '/public/cirurgia-icon.svg';


type NossosServicosProps = {
  className?: string;
};

export default function NossosServicos(props: NossosServicosProps) {
  return (
    <div className={`${props.className} p-0 m-0 w-full`}>
      <h2 className="font-extrabold text-3xl text-mainColor m-20">
        NOSSOS SERVIÇOS
      </h2>
      <div className="flex flex-col md:flex-row flex-wrap justify-center p-0 m-0">
        <div className="mx-5 flex justify-center items-center flex-col p-0 m-0">
          <div className="w-40 h-40 rounded-full bg-mainColor flex justify-center items-center p-0 m-0">
            <Image src={internacoes} alt="Internações icon" />
          </div>
          <div className='mt-5 text-xl font-bold text-mainColor'>Internações</div>
        </div>
        <div className="mx-5 flex justify-center items-center flex-col p-0 m-0">
          <div className="w-40 h-40 rounded-full bg-mainColor flex justify-center items-center p-0 m-0">
            <Image src={clinica} alt="Internações icon" />
          </div>
          <div className='mt-5 text-xl font-bold text-mainColor'>Clínica Veterinária</div>
        </div>
        <div className="mx-5  flex justify-center items-center flex-col p-0 m-0">
          <div className="w-40 h-40 rounded-full bg-mainColor flex justify-center items-center p-0 m-0">
            <Image src={petshop} alt="Internações icon" />
          </div>
          <div className='mt-5 text-xl font-bold text-mainColor'>Pet Shop</div>
        </div>
        <div className="mx-5  flex justify-center items-center flex-col p-0 m-0">
          <div className="w-40 h-40 rounded-full bg-mainColor flex justify-center items-center p-0 m-0">
            <Image src={banho} alt="Internações icon" />
          </div>
          <div className='mt-5 text-xl font-bold text-mainColor'>Banho e Tosa</div>
        </div>
        <div className="mx-5  flex justify-center items-center flex-col p-0 m-0">
          <div className="w-40 h-40 rounded-full bg-mainColor flex justify-center items-center p-0 m-0">
            <Image src={vacina} alt="Internações icon" />
          </div>
          <div className='mt-5 text-xl font-bold text-mainColor'>Vacinas</div>
        </div>
        <div className="mx-5  flex justify-center items-center flex-col p-0 m-0">
          <div className="w-40 h-40 rounded-full bg-mainColor flex justify-center items-center p-0 m-0">
            <Image src={cirurgia} alt="Internações icon" />
          </div>
          <div className='mt-5 text-xl font-bold text-mainColor'>Cirurgias</div>
        </div>
      </div>
    </div>
  );
}
