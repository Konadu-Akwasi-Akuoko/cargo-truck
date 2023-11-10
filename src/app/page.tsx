"use client";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { selectIsAuthenticated } from "@/store/userSlice";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function Home() {
  const router = useRouter();
  // router.push("/dashboard");

  // const isUserAuthenticated = useSelector(selectIsAuthenticated);
  // if (isUserAuthenticated) {
  //   router.push("/dashboard");
  // } else {
  //   router.push("/login");
  // }
  return (
    <main className="">
      <MaxWidthWrapper className="flex flex-col gap-10 mt-10">
        
        <div>
          <h2 className="text-2xl font-medium mb-6">
            Uh Oh. It seems you are not authenticated, sign in or sign up
          </h2>
        </div>
        <Button className="w-fit">
          <LoginLink>Sign in</LoginLink>
        </Button>

        <Button className="w-fit">
          <RegisterLink>Sign up</RegisterLink>
        </Button>
      </MaxWidthWrapper>
    </main>
  );
}
