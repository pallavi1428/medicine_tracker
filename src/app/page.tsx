import { supabase } from '@/lib/supabase'
import { redirect } from 'next/navigation'
import MedicineList from '@/components/medicines/MedicineList'

export default async function Home() {
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  const { data: medicines } = await supabase
    .from('medicines')
    .select('*')
    .eq('user_id', user.id)
    .order('name', { ascending: true })

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Your Medicines</h1>
      <MedicineList medicines={medicines || []} />
    </>
  )
}