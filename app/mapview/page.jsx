'use server';

import { createClient } from "@/utils/supabase/server";
import MapDrawer from "../../components/navigation/MapDrawer";
import { signOutAction } from "../actions";

export default async function MapView() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data, error } = user ? await supabase
    .from("co2_data")
    .select("*")
    .eq("user", user.id)
    .order("created_at", { ascending: false }) : [];

  return (
    <>
      <MapDrawer prevData={data} signOut={signOutAction} user={user?.id} />
    </>
  );
}