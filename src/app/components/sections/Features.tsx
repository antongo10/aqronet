'use client'

import Image from 'next/image'

const features = [
  {
    id: 1,
    title: 'Direct CEO Access',
    description: 'Connect directly with successful CEOs who have built and scaled companies.',
    image: '/features/direct-access.jpg'
  },
  {
    id: 2,
    title: 'Pay Per Call',
    description: 'No subscriptions or long-term commitments. Pay only for the calls you need.',
    image: '/features/pay-per-call.jpg'
  },
  {
    id: 3,
    title: 'Verified Experts',
    description: 'All CEOs are thoroughly vetted to ensure you get the best advice.',
    image: '/features/verified-experts.jpg'
  }
]

export default function Features() {
  return (
    <section className="py-12 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose AQROnet
          </h2>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {features.map((feature) => (
              <div 
                key={feature.id}
                className="group bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="relative h-96 w-full overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}