"use client"

import type React from "react"

import { useState } from "react"
import { BookOpen, Facebook, Instagram, Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// import { ThemeToggle } from "@/components/theme-toggle"
// import { SocialLinks } from "@/components/social-links"

export function ComingSoonPage() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Handle email subscription
      console.log("Email submitted:", email)
      setIsSubmitted(true)
      setTimeout(() => {
        setEmail("")
        setIsSubmitted(false)
      }, 3000)
    }
  }

  const socials = [
    { icon: Send, label: "Telegram", href: "https://t.me/SuradiqApp" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/suradiq_" },
    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/SuradiqApp/" },
  ]

  return (
    <div className="min-h-screen paper-texture flex flex-col">
      {/* Header */}
      <header className="w-full px-6 py-6 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-semibold tracking-tight">سُرَادِقٌ</span>
        </div>
        {/* <ThemeToggle /> */}
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-3xl w-full text-center space-y-12">
          {/* Decorative Book Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center">
                <BookOpen className="w-12 h-12 text-primary" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* Headline */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">قريباً</h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              منصة رقمية تجمع القراء و الكتّاب و الناشرين و المكتبات معاً. اكتشف، شارك، و احتفل بحب القراءة في مجتمع واحد نابض
              بالحياة.
            </p>
          </div>

          {/* Email Subscription */}
          <div className="max-w-md mx-auto space-y-4">
            <p className="text-sm text-muted-foreground">كن أول من يعلم عند إطلاق المنصة</p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <div className="flex-1 relative">
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pr-10 h-12 bg-card"
                  required
                />
              </div>
              <Button type="submit" size="lg" className="h-12 px-8" disabled={isSubmitted}>
                {isSubmitted ? "تم الاشتراك!" : "أعلمني"}
              </Button>
            </form>
            {isSubmitted && (
              <p className="text-sm text-primary animate-in fade-in slide-in-from-bottom-2">
                شكراً لك! سنخبرك عند إطلاق المنصة.
              </p>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full px-6 py-8 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2025 سُرَادِقٌ. نبني مجتمعاً لعشاق الكتب.</p>
          <div className="flex items-center gap-2">
      {socials.map((social) => (
        <Button
          key={social.label}
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-primary/10 hover:text-primary"
          asChild
        >
          <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
            <social.icon className="w-5 h-5" />
          </a>
        </Button>
      ))}
    </div>
        </div>
      </footer>
    </div>
  )
}
