import { createClient } from "@supabase/supabase-js";
import { Database } from "./database.types";

const supabaseUrl = (import.meta).env.VITE_SUPABASE_API_URL;
const supabaseKey = (import.meta).env.VITE_SUPABASE_ANON_KEY;


export const supaClient = createClient<Database>(supabaseUrl, supabaseKey);

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              