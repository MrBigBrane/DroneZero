'use server'

import { createClient } from "@/utils/supabase/server";

export default async function savecsv(csvdata, filename) {
    const supabase = await createClient()

    const {
        data: userData,
        error: userError
      } = await supabase.auth.getUser();

    if (userError) {
        console.log(userError)
    }

    const user = userData.user

    const { data, error } = await supabase
      .from("co2_data")
      .insert({ user: user.id, data: csvdata, filename: filename })
      .select();

    if (error) {
        console.log(error)
    }
}