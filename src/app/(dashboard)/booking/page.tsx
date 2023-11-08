import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { BusFront, LayoutDashboard, LibraryBig, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import userPic from "@/assets/userPic.png";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <main className="flex flex-row">
      {/* This div will house the sidebar */}
      <div className="w-[340px] bg-white h-screen rounded-r-lg outline outline-zinc-300">
        <div className="p-10 fixed top-0 left-0 h-[80%]">
          {/* Logo */}
          <div className="flex flex-row w-full pb-8 ">
            <h2 className="text-2xl font-medium">CargoTruck</h2>
            <Truck className="w-8 h-8 text-primary" />
          </div>
          <div className=" w-full mx-auto border-b border-border" />
          {/* Links */}
          <div className="flex flex-col content-between justify-between h-full">
            <div className="mt-8 flex flex-col space-y-6">
              <Link
                href={"/dashboard"}
                className="flex flex-row gap-4 items-center  px-4 py-2"
              >
                <LayoutDashboard className="w-4 h-4" />
                <span> Dashboard </span>
              </Link>
              <Link
                href={"/booking"}
                className="flex flex-row gap-4 items-center bg-primary text-white px-4 py-2 rounded-2xl"
              >
                <LibraryBig className="w-4 h-4" />
                <span> Booking </span>
              </Link>
              <Link
                href={"/trips"}
                className="flex flex-row gap-4 items-center px-4 py-2"
              >
                <BusFront className="w-4 h-4" />
                <span> Trips </span>
              </Link>
            </div>

            {/* User logo */}
            <div className="mx-auto text-center">
              <div className="w-16 h-16 rounded-full mx-auto ring ring-zinc-200 overflow-hidden mb-3">
                <Image
                  src={userPic}
                  alt="user picture"
                  width={64}
                  height={64}
                />
              </div>
              <p>Emily Johnson</p>

              <Button variant={"ghost"} className="mt-2 ring-1 ring-zinc-100">
                <Link href={"/sign-in"}>Sign Out</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <MaxWidthWrapper>
        {/* This will house the main area */}
        <div></div>
      </MaxWidthWrapper>
    </main>
  );
}
