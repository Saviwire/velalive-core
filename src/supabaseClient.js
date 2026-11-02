import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.39.0/+esm';

const supabaseUrl = 'https://vebcmpvhbizcribjyymt.supabase.co';
const supabaseKey = 'sb_publishable_BgBRMoZMPmri5ytCr3yQUw_Q21SpSFp';

export const supabase = createClient(supabaseUrl, supabaseKey);
