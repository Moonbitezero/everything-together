import { createClient } from '@supabase/supabase-js';

// Wrap your URL and Key in quotes like this!
const supabaseUrl = 'https://nuiotahveolmstxolwym.supabase.co';
const supabaseAnonKey = 'sb_publishable_q9vJJ9iy8YrC67FtY0XHSA_0xk5pa6M';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);