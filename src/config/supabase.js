import { createClient } from '@supabase/supabase-js'

const supabaseUrl = '' // supabase project url
const supabaseKey = '' //supabase anon key
export const supabase = createClient(supabaseUrl, supabaseKey)