
import { Geist } from "next/font/google";
import "./globals.css";
import NavBar from '@/components/navigation/NavBar'
import { signOutAction } from "./actions";
import { createClient } from "@/utils/supabase/server";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "DroneZero",
  description: "An innovative CO2 monitoring system",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default async function RootLayout({ children }) {

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body suppressHydrationWarning>
      
      <div className="flex flex-col items-center">
        <NavBar user={user} signOut={signOutAction}/>
        {children}
      </div>
      
      </body>

    </html>
  );
}
