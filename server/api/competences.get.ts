import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
    const client = serverSupabaseClient(event);
    const { data } = await client.from("Competences").select();

    return data as Competence[];
});
