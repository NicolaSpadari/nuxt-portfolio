import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
    const client = serverSupabaseClient(event);
    const { data } = await client.from("portfolio_experiences").select();

    return data as Experience[]
});
