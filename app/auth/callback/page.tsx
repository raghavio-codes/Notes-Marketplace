"use client"
import { useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

export default function AuthCallback() {
  const router = useRouter()

  useEffect(() => {
    const getSession = async () => {
      const { data, error } = await supabase.auth.getSession()
      if (error) console.error("Callback error:", error)
      else router.push("/") // or dashboard
    }
    getSession()
  }, [router])

  return <p>logging in...</p>
}
