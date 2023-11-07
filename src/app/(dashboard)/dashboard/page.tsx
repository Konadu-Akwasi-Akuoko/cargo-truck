import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import {
  Bus,
  BusFront,
  CarFront,
  LayoutDashboard,
  LibraryBig,
  PhoneCall,
  SearchIcon,
  Truck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import userPic from "@/assets/userPic.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";

export default function Dashboard() {
  const date = new Date();
  const formattedDate = format(date, "MMMM d, yyyy");
  return (
    <main className="flex flex-row">
      {/* This div will house the sidebar */}
      <div className="w-[340px] bg-white h-screen rounded-r-lg outline outline-zinc-300">
        <div className="p-10 w-full h-[80%]">
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
                className="flex flex-row gap-4 items-center bg-primary text-white px-4 py-2 rounded-2xl"
              >
                <LayoutDashboard className="w-4 h-4" />
                <span> Dashboard </span>
              </Link>
              <Link
                href={"/booking"}
                className="flex flex-row gap-4 items-center px-4 py-2"
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
        <div>
          {/* Search bar div */}
          <div className="mt-6 bg-white rounded-md shadow-md flex flex-row justify-between items-end py-6 px-4 ring-1 ring-zinc-200">
            <div className="flex flex-row gap-2 w-[70%]">
              <Input type="text" placeholder="Search for a destination" />
              <Button>
                <SearchIcon className="mr-2 w-4 h-4" />
                Search
              </Button>
            </div>
            <div className="text-zinc-500">
              <p>{formattedDate}</p>
            </div>
          </div>

          {/* Current trip and most visited location trucks */}
          <div className=" grid grid-cols-2 gap-5 mt-10">
            <div className="bg-white px-10 py-6 shadow-md rounded-md ring-1 ring-zinc-200">
              <div className="flex flex-row justify-between items-end mb-8">
                <h3 className="text-2xl font-medium ">Current trip</h3>
                <div className="py-1 px-3 bg-zinc-100 rounded-full flex flex-row items-center gap-2">
                  <p className="text-sm text-zinc-600">1 day in transit</p>
                  <Bus className="text-zinc-500 w-6 h-6" />
                </div>
              </div>
              {/* Parcel details */}
              <div className="grid grid-cols-2 gap-8">
                {/* Picture and name */}
                <div>
                  <div className="w-20 h-20 rounded-full ring ring-zinc-200 overflow-hidden mb-4">
                    <Image
                      src={userPic}
                      alt="Driver's picture"
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className="flex flex-row gap-1">
                    <CarFront />
                    <p>
                      <span className="text-blue-500 hover:underline cursor-pointer">
                        Yaw Kwaku
                      </span>{" "}
                      is your driver
                    </p>
                  </div>
                </div>
                {/* Driver details */}
                <div className="flex flex-col space-y-4">
                  <div className="flex flex-row gap-3 items-center">
                    <PhoneCall className="w-5 h-5" />
                    <p>0123456789</p>
                  </div>
                  <div className="flex flex-row gap-3 items-center">
                    <PhoneCall className="w-5 h-5" />
                    <p>0123456789</p>
                  </div>
                  <div className="flex flex-row gap-3 items-center">
                    <PhoneCall className="w-5 h-5" />
                    <p>0123456789</p>
                  </div>
                  <div className="flex flex-row gap-3 items-center">
                    <PhoneCall className="w-5 h-5" />
                    <p>0123456789</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </main>
  );
}
