import userPic from "@/assets/userPic.png";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { SearchBar } from "@/components/SearchBar";
import { TripsYouCanJoin } from "@/components/TripsYouCanJoin";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import {
  BadgeCent,
  Box,
  Bus,
  BusFront,
  Car,
  LayoutDashboard,
  LibraryBig,
  Map,
  MapPin,
  MapPinned,
  MoveRight,
  PhoneCall,
  SearchIcon,
  Timer,
  Truck,
  UserCircle,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {
  const date = new Date();
  const formattedDate = format(date, "MMMM d, yyyy");
  return (
    <main className="flex flex-row ">
      {/* This div will house the sidebar */}
      <div className="w-[340px] bg-white rounded-r-lg outline outline-zinc-300 relative">
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
        <div>
          <SearchBar />

          {/* Current trip and most visited location trucks */}
          <div className=" grid grid-cols-2 gap-40 mt-10">
            {/* Current trip */}
            <div className="bg-white px-10 py-6 shadow-md rounded-md ring-1 ring-zinc-200 cursor-pointer transition hover:shadow-lg">
              <div className="flex flex-row justify-between items-end mb-8">
                <h3 className="text-2xl font-medium ">Current trip</h3>
                <div className="py-1 px-3 bg-zinc-100 rounded-full flex flex-row items-center gap-2">
                  <p className="text-sm text-zinc-600">1 day in transit</p>
                  <Bus className="text-zinc-500 w-6 h-6" />
                </div>
              </div>
              {/* Parcel details */}
              <div className="flex flex-row justify-between">
                {/* Picture and name */}
                <div>
                  <div className="w-20 h-20 mx-auto rounded-full ring ring-zinc-200 overflow-hidden mb-4">
                    <Image
                      src={userPic}
                      alt="Driver's picture"
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className="flex flex-row gap-1 justify-center items-center hover:text-blue-500  hover:underline">
                    <UserCircle />
                    <p className=" text-xl cursor-pointer">Yaw Kwaku</p>
                  </div>
                </div>
                {/* Driver details */}
                <div className="flex flex-col justify-between w-fit">
                  <div className="flex flex-row gap-3 items-center">
                    <PhoneCall className="w-5 h-5" />
                    <p>0123456789</p>
                  </div>
                  <div className="flex flex-row gap-3 items-center">
                    <Car className="w-5 h-5" />
                    <p>AK-5452-17</p>
                  </div>
                  <div className="flex flex-row gap-3 items-center">
                    <Map className="w-5 h-5" />
                    <p>From Kumasi</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Most visited place */}
            <div className="bg-white px-10 py-6 shadow-md rounded-md ring-1 ring-zinc-200">
              <div className="flex flex-row justify-between items-end mb-8">
                <div className="flex flex-row gap-1 items-center">
                  <MapPinned className="w-6 h-6" />
                  <h3 className="text-2xl font-medium ">Book a trip</h3>
                </div>
                <Button
                  variant={"outline"}
                  size={"sm"}
                  className="hover:bg-blue-50 items-center"
                >
                  See more
                </Button>
              </div>
              {/* Most visited location details */}
              <div className="flex flex-col gap-4">
                <Button variant={"ghost"} className="ring-[1px] ring-border">
                  <div className="flex flex-row items-center justify-between w-full">
                    <p className="text-base font-normal">Kumasi</p>
                    <MoveRight className="text-blue-500" />
                    <p className="text-base font-normal">Accra</p>
                  </div>
                </Button>
                <Button variant={"ghost"} className="ring-[1px] ring-border">
                  <div className="flex flex-row items-center justify-between w-full">
                    <p className="text-base font-normal">Sekondi</p>
                    <MoveRight className="text-blue-500" />
                    <p className="text-base font-normal">Accra</p>
                  </div>
                </Button>
                <Button variant={"ghost"} className="ring-[1px] ring-border">
                  <div className="flex flex-row items-center justify-between w-full">
                    <p className="text-base font-normal">Sunyani</p>
                    <MoveRight className="text-blue-500" />
                    <p className="text-base font-normal">Accra</p>
                  </div>
                </Button>
              </div>
            </div>
          </div>

          <TripsYouCanJoin />
        </div>
      </MaxWidthWrapper>
    </main>
  );
}
