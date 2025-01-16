import Image from 'next/image';
import logo from '/public/logo.svg';
import wpp from '/public/whatsapp-icon.svg';
import address from '/public/addres-icon.svg';
import Link from 'next/link';

type HeaderProps = {
  className?: string
}

export default function Header(props: HeaderProps) {
  return (
    <div className={`w-screen flex justify-around items-center bg-background h-40 ${props.className}`}>
      <Link href={'/'}>
        <Image className="md:w-40 h-auto w-28" src={logo} alt="Neopets logo" />
      </Link>
      <div className="flex flex-row gap-5">
        <Link href={'https://wa.me/+5538997413703'} target='_blank'>
          <div className="flex items-center flex-row gap-5">
            <Image className="w-7 h-auto" src={wpp} alt="whatsapp icon" />
            <span className="hidden md:inline md:text-mainColor ">
              (38) 9 9741-3703
            </span>
          </div>
        </Link>
        <Link href={'https://maps.app.goo.gl/T1vJEqhQFpAvbu496'} target='_blank'>
          <div className="flex items-center flex-row gap-5">
            <Image className="w-7 h-auto  " src={address} alt="address icon" />
            <span className="hidden md:inline md:text-mainColor ">
              Rua Barão Rio Branco, 326 Centro, Curvelo
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
