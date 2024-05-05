import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://flfapssjsncisklbnhrt.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsZmFwc3Nqc25jaXNrbGJuaHJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ4ODQxNzUsImV4cCI6MjAzMDQ2MDE3NX0.rZq51LkyprL0BEcn5jxUjZx-c0dMLcy09pG71feqEGw'
export const supabase = createClient(supabaseUrl, supabaseKey)