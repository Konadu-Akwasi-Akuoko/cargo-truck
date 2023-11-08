import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { Sidebar } from "@/components/Sidebar";

export default function Dashboard() {
  return (
    <main className="flex flex-row">
      <Sidebar url="booking" />

      <MaxWidthWrapper className="min-h-screen">
        {/* This will house the main area */}
      </MaxWidthWrapper>
    </main>
  );
}
