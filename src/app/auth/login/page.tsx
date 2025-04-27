import { supabase } from '@/lib/supabase'
import { redirect } from 'next/navigation'

export default function LoginPage() {
  async function handleLogin(formData: FormData) {
    'use server'
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (!error) redirect('/')
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-xl font-bold mb-4">Login</h1>
      <form action={handleLogin} className="space-y-4">
        <input name="email" type="email" placeholder="Email" required 
               className="w-full p-2 border rounded" />
        <input name="password" type="password" placeholder="Password" required 
               className="w-full p-2 border rounded" />
        <button type="submit" 
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Login
        </button>
      </form>
    </div>
  )
}