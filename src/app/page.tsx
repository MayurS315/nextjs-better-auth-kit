import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

import { HomeView } from "@/modules/home/ui/views/home-view";

const Page = async () => {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      redirect("/sign-in");
    }
  } catch (error) {
    console.error("Failed to get session:", error);
    redirect("/sign-in");
  }

  return <HomeView />;
};

export default Page;
