import Link from "next/link";
import Image from "next/image";
import { BRAND, CONTACT_EMAIL, LEGAL_NAME, SIGNUP_URL, PRICE } from "@/lib/content";
export function Header(){return(
<header className="sticky top-0 z-40 border-b border-white/10 bg-night/90 text-white backdrop-blur">
 <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
  <Link href="/" aria-label={BRAND}><Image src="/media/logo.png" alt={BRAND} width={150} height={32} priority className="h-8 w-auto"/></Link>
  <nav className="flex items-center gap-5 text-sm">
   <a href="/#how" className="hidden sm:inline hover:text-cyan">How it works</a>
   <a href="/#pricing" className="hidden sm:inline hover:text-cyan">Pricing</a>
   <Link href="/faq" className="hover:text-cyan">FAQ</Link>
   <a href={SIGNUP_URL} className="btn btn-pink !py-2 text-sm">Start · {PRICE}</a>
  </nav>
 </div>
</header>)}
export function Footer(){return(
<footer className="mt-auto bg-night py-10 text-sm text-white/70">
 <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 sm:flex-row sm:justify-between">
  <p>© 2026 {BRAND}. All rights reserved. Operated by {LEGAL_NAME}.</p>
  <p>Know What&apos;s Going Viral. Every Morning. · <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
 </div>
</footer>)}
export function CTA(){return(
<section className="bg-night py-16 text-center text-white">
 <h2 className="font-display text-3xl sm:text-4xl">Stop Guessing What&apos;s Going Viral.</h2>
 <p className="mt-3 text-white/80">Start your TrendDrop membership today and get your first daily digest tomorrow morning.</p>
 <a href={SIGNUP_URL} className="btn btn-pink mt-6">Get Started — {PRICE}</a>
 <p className="mt-3 text-sm text-white/60">Cancel anytime · No contracts · Delivered daily</p>
</section>)}
