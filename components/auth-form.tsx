'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSignUp = async () => {
    setLoading(true);
    setErrorMsg('');

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setErrorMsg(error.message);
      setLoading(false);
      return;
    }

    const user = data.user;

    if (user) {
      const { error: insertError } = await supabase.from('users').insert({
        id: user.id,
        full_name: fullName,
        email: user.email,
      });

      if (insertError) {
        setErrorMsg(insertError.message);
      } else {
        console.log('✅ user row created in users table');
      }
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto py-12">
      <h1 className="text-2xl mb-4">Sign up</h1>
      <Input
        placeholder="Full name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
      />
      <Input
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}
      <Button onClick={handleSignUp} disabled={loading} className="mt-4">
        {loading ? 'Signing up...' : 'Sign up'}
      </Button>
    </div>
  );
}