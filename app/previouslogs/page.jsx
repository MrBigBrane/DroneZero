'use server';

import { createClient } from "@/utils/supabase/server";
import { Button } from "@mui/material";
import Link from "next/link";

export default async function PreviousLogs() {
    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data, error } = await supabase
        .from("co2_data")
        .select("*")
        .eq("user", user.id)
        .order("created_at", { ascending: false });

    return (
      <>
        <h1>Previous Logs</h1>
        {data.map((log) => (
          <div key={log.id}>
            <h2>{log.filename}</h2>
            <Button>
              <Link href={{ pathname: "/mapview", query: { id: log.id } }}>
                View
              </Link>
            </Button>
          </div>
        ))}
      </>
    );
}