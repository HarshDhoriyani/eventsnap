import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY!;

// Server-side Supabase client using service role key
// All access is gated through NextAuth session checks in API routes
export const supabase = createClient(supabaseUrl, supabaseServiceKey);
