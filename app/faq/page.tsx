import type { Metadata } from "next";
import { CTA } from "@/components/Shell";
import { FAQ, CONTACT_EMAIL } from "@/lib/content";
export const metadata: Metadata = { title: "FAQ" };
export default function Page(){return(<main>
 <section className="mx-auto max-w-3xl px-4 py-16"><h1 className="font-display text-4xl">Frequently Asked Questions</h1>
 {FAQ.map(([g,qs])=>(<div key={g} className="mt-10"><h2 className="text-sm font-bold uppercase tracking-widest text-pink">{g}</h2>
  {qs.map(([q,a])=>(<details key={q} className="mt-3 rounded-xl bg-white p-5 shadow-sm"><summary className="cursor-pointer font-semibold">{q}</summary><p className="mt-3 text-ink/75">{a}</p></details>))}</div>))}
 <div className="mt-12 rounded-2xl bg-white p-6 text-center"><h2 className="font-display text-2xl">Still Have Questions?</h2><p className="mt-2 text-ink/70">We&apos;re happy to help. Email <a className="text-pink underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and we&apos;ll get back to you within one business day.</p></div>
 </section><CTA/></main>)}
