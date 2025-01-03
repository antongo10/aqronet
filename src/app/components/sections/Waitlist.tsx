'use client'

import { useState } from 'react'

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus('idle')

    try {
      // Replace with your Klaviyo list ID and public API key
      const listId = 'YOUR_LIST_ID'
      const publicApiKey = 'YOUR_PUBLIC_API_KEY'

      const response = await fetch(`https://a.klaviyo.com/api/v2/list/${listId}/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          api_key: publicApiKey,
          profiles: [{
            email,
            name,
            properties: {
              'Source': 'AQROnet Waitlist',
              'Signup Date': new Date().toISOString()
            }
          }]
        })
      })

      if (response.ok) {
        setStatus('success')
        setEmail('')
        setName('')
      } else {
        throw new Error('Failed to subscribe')
      }
    } catch (error) {
      console.error('Error:', error)
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="waitlist" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-10">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Join the Waitlist
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Be among the first to get access when we launch.
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <form 
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 transition-colors"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 transition-colors"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className={`
                  w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline
                  transition-all duration-300 relative
                  ${loading ? 'opacity-75 cursor-not-allowed' : ''}
                `}
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <svg 
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24"
                    >
                      <circle 
                        className="opacity-25" 
                        cx="12" 
                        cy="12" 
                        r="10" 
                        stroke="currentColor" 
                        strokeWidth="4"
                      />
                      <path 
                        className="opacity-75" 
                        fill="currentColor" 
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Processing...
                  </div>
                ) : (
                  'Join Waitlist'
                )}
              </button>
            </div>
          </form>

          {status === 'success' && (
            <div className="text-center text-green-600 font-medium animate-fade-in">
              Thank you for joining our waitlist! We&apos;ll be in touch soon.
            </div>
          )}

          {status === 'error' && (
            <div className="text-center text-red-600 font-medium animate-fade-in">
              There was an error joining the waitlist. Please try again.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}