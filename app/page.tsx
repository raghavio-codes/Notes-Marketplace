'use client'

import { useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('your_table_name').select('*')
      console.log({ data, error })
    }

    fetchData()
  }, [])

  return <div>🚀 notes marketplace is booting up...</div>
}
