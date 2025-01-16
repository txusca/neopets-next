import Link from "next/link";
import wpp from "/public/wpp-button.svg";
import Image from "next/image";

type FloatIconProps = {
  className?: string;
}

export default function FloatIcon(props: FloatIconProps) {
  return (
    <div className={`${props.className}`}>
      <Link href={"https://wa.me/+5538997413703"} target="_blank">
        <div className="bg-green-400 rounded-full p-3">
          <Image className="" src={wpp} alt="Whatsapp icon"/>
        </div>
      </Link>
    </div>
  )
}