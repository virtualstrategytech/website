import { supabase } from "./supabaseClient";

export async function sendLead({
  name,
  email,
  source,
}: {
  name?: string;
  email: string;
  source?: string;
}) {
  const { data, error } = await supabase
    .from("leads")
    .insert([{ name: name ?? null, email, source: source ?? null }])
    .select();
  if (error) throw error;
  return data;
}
