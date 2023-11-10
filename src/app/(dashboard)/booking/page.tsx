import { BookingForm } from "@/components/BookingForm";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { Sidebar } from "@/components/Sidebar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const { isAuthenticated } = getKindeServerSession();
  const authenticated = await isAuthenticated();

  if (!authenticated) {
    redirect("/api/auth/login");
  }
  return (
    <main className="flex flex-row">
      <Sidebar url="booking" />

      <MaxWidthWrapper className="min-h-screen">
        <BookingForm />
      </MaxWidthWrapper>
    </main>
  );
}
