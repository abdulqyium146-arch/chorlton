'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'
import { BUSINESS } from '@/lib/theme'
import { Container } from './Container'
import { cn } from '@/lib/cn'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Auto Locksmith', href: '/auto-locksmith-chorlton' },
    { label: 'About', href: '/about' },
    { label: 'Areas', href: '/areas-we-cover' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <Container>
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 bg-gradient-to-br from-slate-950 to-slate-800 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">CL</span>
            </div>
            <span className="text-slate-950 hidden sm:inline">
              Chorlton
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-700 hover:text-amber-400 transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Call Button - Desktop */}
          <a
            href={`tel:${BUSINESS.phone}`}
            className="hidden sm:flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-4 py-2 rounded-lg transition-colors"
          >
            <Phone size={18} />
            <span className="text-sm sm:inline">{BUSINESS.phoneDisplay}</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className="text-slate-950" />
            ) : (
              <Menu size={24} className="text-slate-950" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-slate-200 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${BUSINESS.phone}`}
              className="block px-4 py-2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold rounded-lg transition-colors text-center mt-4"
            >
              Call Now: {BUSINESS.phoneDisplay}
            </a>
          </nav>
        )}
      </Container>
    </header>
  )
}
