import Link from "next/link";

type SeguirProps = {
  className?: string;
};

export default function Seguir(props: SeguirProps) {
  return (
    <div className={`${props.className}`}>
      <h4 className="text-2xl text-mainColor">@clinicaneopets</h4>
      <Link href={"https://www.instagram.com/clinicaneopets/"} target="_blank">
        <div className="flex justify-center items-center bg-background w-[100px] h-11 rounded-[10px] text-mainColor">
          Seguir +
        </div>
      </Link>
    </div>
  );
}
