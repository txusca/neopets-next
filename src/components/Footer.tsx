import Image from 'next/image';

import logo from '/public/logo.svg';
import face from '/public/Facebook.svg';
import insta from '/public/Instagram.svg';
import mail from '/public/mail.svg';
import wpp from '/public/whatsapp-icon.svg';
import addres from '/public/addres-icon.svg';
import Link from 'next/link';

type FooterProps = {
  className?: string;
};

export default function Footer(props: FooterProps) {
  return (
    <footer className={`py-8 ${props.className}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="flex flex-col justify-center items-center w-full md:w-1/3 mb-8 md:mb-0 text-center md:text-left">
            <Image src={logo} alt="Logo" className="mx-auto md:mx-0 mb-4" />
            <div className="flex justify-center md:justify-start space-x-4">
              <Link
                href="https://www.facebook.com/clinicaneopets"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={face} alt="Facebook" className="w-12 h-12" />
              </Link>
              <Link
                href="https://www.instagram.com/clinicaneopets/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={insta} alt="Instagram" className="w-12 h-12" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full md:w-1/3 mb-8 md:mb-0 text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Contatos</h4>
            <Link
              href="https://wa.me/+5538997413703"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center md:justify-start space-x-2 mb-2"
            >
              <Image src={wpp} alt="Whatsapp" className="w-12 h-12" />
              <span>(38) 9 9741-3703</span>
            </Link>
            <Link
              href="mailto:exlabneopets@hotmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center md:justify-start space-x-2"
            >
              <Image src={mail} alt="e-mail" className="w-12 h-12" />
              <span>exlabneopets@hotmail.com</span>
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center w-full md:w-1/3 text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Endereço</h4>
            <Link
              href="https://maps.app.goo.gl/T1vJEqhQFpAvbu496"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center md:justify-start space-x-2"
            >
              <Image src={addres} alt="Endereço" className="w-12 h-12" />
              <span>Rua Barão Rio Branco, 326 Centro, Curvelo</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
