'use server'

import { createClient } from "@/utils/supabase/server";

export default async function savefilename(item, filename) {
    const supabase = await createClient()

    const { data, error } = await supabase
      .from("co2_data")
      .update({ filename: filename })
      .select()
      .eq("id", item.id)

    if (error) {
        console.log('Error')
        console.log(error)
    }
}