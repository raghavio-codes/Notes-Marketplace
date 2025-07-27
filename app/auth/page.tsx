import AuthForm from '@/components/auth-form'

export default function AuthPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center">Login or Sign Up</h1>
        <AuthForm />
      </div>
    </main>
  )
}
