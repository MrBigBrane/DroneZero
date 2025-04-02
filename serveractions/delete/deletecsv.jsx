'use server'

import { createClient } from "@/utils/supabase/server";

export default async function deletecsv(item) {
    const supabase = await createClient()

    const { data, error } = await supabase
      .from("co2_data")
      .delete()
      .eq("id", item.id)
      .select()

    if (error) {
        console.log('Error')
        console.log(error)
    }
}