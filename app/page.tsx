import Image from "next/image";
import { CTA } from "@/components/Shell";
import { AUDIENCES, NICHES, PRICE, SAMPLE, SIGNUP_URL } from "@/lib/content";
const H = ({k,t,s}:{k:string;t:string;s?:string}) => (<div className="mx-auto max-w-3xl text-center"><p className="text-sm font-bold uppercase tracking-widest text-pink">{k}</p><h2 className="mt-2 font-display text-3xl sm:text-4xl">{t}</h2>{s&&<p className="mt-3 text-ink/70">{s}</p>}</div>);
export default function Home(){return(<main>
 <section className="bg-night text-white"><div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-2">
  <div><h1 className="font-display text-4xl leading-tight sm:text-5xl">Never Miss a Viral TikTok Again.</h1>
   <p className="mt-5 text-lg text-white/80">Get the top 3 most viral TikToks in YOUR niche delivered to your inbox every single morning — fully personalized to your industry, interest, or topic.</p>
   <div className="mt-7 flex flex-wrap gap-3"><a href={SIGNUP_URL} className="btn btn-pink">Start My Daily Digest → {PRICE}</a><a href="#how" className="btn btn-line">How it works</a></div>
   <p className="mt-3 text-sm text-white/60">Cancel anytime. No contracts. Delivered every morning to your inbox.</p></div>
  <Image src="/media/hero.jpg" alt="TrendDrop on a monitor" width={2048} height={1152} priority className="rounded-2xl shadow-2xl"/>
 </div>
 <div className="border-t border-white/10"><dl className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 text-center sm:grid-cols-4">
  {[["141M+","videos analyzed daily"],["Any","niche, any topic"],["Delivered","every morning"],["Cancel","anytime"]].map(([a,b])=>(<div key={a}><dt className="font-display text-2xl text-cyan">{a}</dt><dd className="text-sm text-white/70">{b}</dd></div>))}
 </dl></div></section>

 <section className="px-4 py-16"><H k="What Is TrendDrop?" t="Your Personal TikTok Trend Researcher — Working 24/7"/>
  <div className="mx-auto mt-6 max-w-3xl space-y-4 text-lg text-ink/80"><p>TikTok moves fast. By the time you find a viral video in your niche, it&apos;s already old news.</p>
  <p>TrendDrop monitors TikTok every single day across your chosen niche — whether that&apos;s real estate, digital marketing, or something more niche like forever chemicals, UTV offroading, road cycling, or anything in between. It delivers the top 3 most viral videos directly to your inbox each morning.</p>
  <p className="font-semibold">No scrolling. No searching. No wasted time.</p><p>Just the content that&apos;s blowing up in your world, waiting in your inbox every day.</p></div></section>

 <section id="how" className="bg-white px-4 py-16"><H k="How It Works" t="Up and Running in 3 Simple Steps"/>
  <ol className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-3">{[["Choose Your Plan","Sign up for the TrendDrop membership in under 2 minutes."],["Tell Us Your Niche","After signup you'll fill out a quick form telling us exactly what topic or industry you want monitored. As specific or broad as you like."],["Get Your Daily Digest","Every morning you'll receive an email with the top 3 most viral TikTok videos in your niche — complete with view counts, likes, and a direct link to watch."]].map(([t,d],i)=>(
   <li key={t} className="rounded-2xl border border-ink/10 p-6"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-pink font-bold text-white">{i+1}</span><h3 className="mt-4 text-xl font-bold">{t}</h3><p className="mt-2 text-ink/70">{d}</p></li>))}</ol></section>

 <section className="px-4 py-16"><H k="Works For Any Niche" t="Whatever Your World Is, We Cover It" s="TrendDrop isn't one-size-fits-all. You choose your niche and we track it daily. Here are just a few examples of what our members monitor:"/>
  <div className="mx-auto mt-10 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">{NICHES.map(([t,d])=>(<div key={t} className="rounded-xl border-l-4 border-cyan bg-white p-5 shadow-sm"><h3 className="font-bold">{t}</h3><p className="mt-1 text-sm text-ink/70">{d}</p></div>))}</div>
  <p className="mt-8 text-center text-ink/80">Don&apos;t see your niche? No problem. If people are posting about it on TikTok, we can track it.</p></section>

 <section className="bg-night px-4 py-16 text-white"><div className="mx-auto max-w-3xl text-center"><p className="text-sm font-bold uppercase tracking-widest text-cyan">What You&apos;ll Receive</p><h2 className="mt-2 font-display text-3xl sm:text-4xl">A Clean, Simple Email. Every Morning.</h2></div>
  <div className="mx-auto mt-10 max-w-xl rounded-2xl bg-white p-6 text-ink shadow-2xl"><p className="border-b pb-3 font-bold">🔥 Top 3 Viral [Your Niche] TikToks Today — May 2</p>
  {SAMPLE.map(([r,v,l,c])=>(<div key={r} className="border-b py-4 last:border-0"><p className="font-bold">{r} — {v} views</p><p className="text-sm text-ink/60">@username · #yourniche</p><p className="mt-1 italic text-ink/80">&quot;Caption or description of the video here...&quot;</p><p className="mt-2 text-sm">▶️ {v} views · ❤️ {l} likes · 💬 {c} comments</p><span className="mt-2 inline-block rounded-full bg-pink px-3 py-1 text-sm font-semibold text-white">Watch on TikTok →</span></div>))}
  </div><p className="mt-3 text-center text-xs text-white/50">Sample email layout. Numbers are illustrative.</p></section>

 <section className="px-4 py-16"><H k="Who Uses TrendDrop?" t="Built For People Who Need to Stay Ahead"/>
  <div className="mx-auto mt-10 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">{AUDIENCES.map(([e,t,d])=>(<div key={t} className="rounded-2xl bg-white p-6 shadow-sm"><div className="text-3xl">{e}</div><h3 className="mt-3 font-bold">{t}</h3><p className="mt-2 text-sm text-ink/70">{d}</p></div>))}</div></section>

 <section id="pricing" className="bg-white px-4 py-16"><H k="Pricing" t="Simple, Flat Pricing" s="One plan. One price. Everything included."/>
  <div className="mx-auto mt-10 max-w-md rounded-2xl border-2 border-pink p-8 text-center"><h3 className="text-xl font-bold">Daily TikTok Report</h3><p className="mt-3 font-display text-5xl">$19<span className="text-lg text-ink/60">/month</span></p>
  <p className="mt-4 text-ink/70">Get the top 3 most viral TikToks in YOUR niche delivered to your inbox every single morning — fully personalized to your industry, interest, or topic.</p>
  <ul className="mt-4 space-y-1 text-sm"><li>✓ Top 3 viral TikToks in your niche</li><li>✓ Delivered every morning, 7 days a week</li><li>✓ Cancel anytime · No contracts</li></ul>
  <a href={SIGNUP_URL} className="btn btn-pink mt-6 w-full">Start My Daily Digest</a></div></section>
 <CTA/>
</main>)}
