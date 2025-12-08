import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NichePulse',
  description: 'An AI-driven micro-SaaS platform that curates and delivers personalized niche market trends, insights, and actionable data tailored to small businesses in underserved markets.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">NichePulse</h1>
      <p className="mt-4 text-lg">An AI-driven micro-SaaS platform that curates and delivers personalized niche market trends, insights, and actionable data tailored to small businesses in underserved markets.</p>
    </main>
  )
}
