import { signOutAction } from "../actions";

import MapDrawer from "../../components/navigation/MapDrawer";
import { createClient } from "@/utils/supabase/server";

export default async function DevPage() {
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    return (
        <>
            {/* <h1>Dev Page</h1> */}
            <MapDrawer prevData={[]} signOut={signOutAction} user={user.id} />
        </>
    );
}