'use client'

import React, { useState } from 'react'
import { BUSINESS } from '@/lib/theme'
import { cn } from '@/lib/cn'
import { Loader } from 'lucide-react'

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 1000)
  }

  if (submitted) {
    return (
      <div className="p-6 bg-green-50 border border-green-200 rounded-lg text-center">
        <h3 className="text-lg font-bold text-green-900 mb-2">Thank You!</h3>
        <p className="text-green-700 mb-4">
          We'll contact you shortly to confirm your quote request.
        </p>
        <a
          href={`tel:${BUSINESS.phone}`}
          className="inline-block bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-6 py-2 rounded-lg transition-colors"
        >
          Or Call Now
        </a>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <div>
        <label className="block text-sm font-medium text-slate-900 mb-1">
          Your Name
        </label>
        <input
          type="text"
          required
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
          placeholder="John Smith"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-900 mb-1">
          Phone Number
        </label>
        <input
          type="tel"
          required
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
          placeholder="07XXX XXXXXX"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-900 mb-1">
          Service Needed
        </label>
        <select
          required
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
        >
          <option value="">Select a service</option>
          <option value="emergency">Emergency Locksmith</option>
          <option value="residential">Residential Locksmith</option>
          <option value="commercial">Commercial Locksmith</option>
          <option value="repair">Lock Repair</option>
          <option value="replacement">Lock Replacement</option>
          <option value="upvc">uPVC Door Locks</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-900 mb-1">
          Additional Details
        </label>
        <textarea
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
          rows={3}
          placeholder="Tell us more about what you need..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          'w-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2',
          isSubmitting && 'opacity-75 cursor-not-allowed'
        )}
      >
        {isSubmitting && <Loader size={20} className="animate-spin" />}
        {isSubmitting ? 'Submitting...' : 'Get Free Quote'}
      </button>

      <p className="text-xs text-slate-600 text-center">
        Or call us directly: <a href={`tel:${BUSINESS.phone}`} className="font-bold text-amber-600">{BUSINESS.phoneDisplay}</a>
      </p>
    </form>
  )
}
