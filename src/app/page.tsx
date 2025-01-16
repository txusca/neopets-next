import AgendeAtendimento from '@/components/AgendeAtendimento';
import Carousel from '@/components/Carousel';
import FloatIcon from '@/components/FloatIcon';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import NossosServicos from '@/components/NossosServicos';
import PorqueEscolher from '@/components/PorqueEscolher';
import QuemSomos from '@/components/QuemSomos';
import Seguir from '@/components/Seguir';

export default function Home() {
  return (
    <div>
      <Header className="md:mb-8" />
      <FloatIcon className='fixed top-[80%] right-[10%] z-50'/>
      <div className="container mx-auto flex flex-col justify-center">
        <QuemSomos className="flex flex-col md:flex-row justify-center items-center w-full" />
        <NossosServicos className="flex flex-col justify-center xl:h-129 md:h-192 items-center bg-background" />
        <PorqueEscolher className="flex flex-col items-center" />
        <Carousel className="md:mt-5" />
        <Seguir className="flex justify-center items-center mt-10 gap-[10px]" />
        <AgendeAtendimento className="flex flex-col items-center" />
        <Footer className='my-[50px] mr-0 ml-[50px] text-mainColor'/>
      </div>
    </div>
  );
}
