'use server';

import { createClient } from "@/utils/supabase/server";
import LazyMap from "@/components/maps/LazyLoadingMap";

export default async function MapView({ searchParams }) {
  const supabase = await createClient()

  let datum = [];
  let id = await searchParams


  if(id.id) {
    const { data, error } = await supabase
      .from("co2_data")
      .select("*")
      .eq("id", id.id)

    datum = data[0].data
  }



  return (
    <>
      <LazyMap data={datum}/>
    </>
  )

}