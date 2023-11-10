import { AllTripsYouCanJoin } from "@/components/AllTripsYouCanJoin";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { SearchBar } from "@/components/SearchBar";
import { Sidebar } from "@/components/Sidebar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Trips() {
  const { isAuthenticated } = getKindeServerSession();
  const authenticated = await isAuthenticated();

  if (!authenticated) {
    redirect("/api/auth/login");
  }
  return (
    <main className="flex flex-row">
      <Sidebar url="trips" />

      <MaxWidthWrapper className="min-h-screen">
        <div>
          <SearchBar />
          <AllTripsYouCanJoin />
        </div>
      </MaxWidthWrapper>
    </main>
  );
}
