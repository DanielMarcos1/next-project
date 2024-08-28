import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-8">The page youre looking for doesnt exist.</p>
      <Link href="/" className="text-blue-500 hover:text-blue-700">
        Go back to home
      </Link>
    </div>
  )
}