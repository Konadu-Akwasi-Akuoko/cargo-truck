import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
     <Link href={"/sign-in"} className="font-bold text-5xl">Sign In</Link>
    </main>
  );
}
