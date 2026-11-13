"use client";

import Image from "next/image";
import { track } from "@vercel/analytics";
import { AMAZON_DISCLOSURE, TRENDING_FINDS, type TrendingFind } from "@/lib/content";

const AFFILIATE_REL = "nofollow sponsored noopener noreferrer";

function ProductCard({ product }: { product: TrendingFind }) {
  const localImage = product.image?.startsWith("/") ? product.image : undefined;

  return (
    <article className="flex flex-col rounded-2xl border border-ink/10 bg-paper p-5 shadow-sm">
      {localImage ? (
        <Image src={localImage} alt="" width={56} height={56} className="h-14 w-14 rounded-2xl object-cover" />
      ) : (
        <div aria-hidden="true" className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm">
          {product.icon}
        </div>
      )}
      <h3 className="mt-4 text-lg font-bold">{product.name}</h3>
      <p className="mt-1 text-sm text-ink/70">{product.blurb}</p>
      {product.priceLabel ? (
        <p className="mt-3 text-sm font-semibold">About {product.priceLabel} on Amazon</p>
      ) : null}
      <div className="mt-auto flex flex-col gap-3 pt-4">
        <a
          href={product.amazonUrl}
          target="_blank"
          rel={AFFILIATE_REL}
          className="btn btn-pink w-full"
          onClick={() => track("affiliate_click", { product: product.name })}
        >
          Check price on Amazon
        </a>
        {product.shortUrl ? (
          <a
            href={product.shortUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center text-sm font-semibold text-pink hover:underline"
          >
            Watch the Short
          </a>
        ) : null}
      </div>
    </article>
  );
}

export function TrendingFinds() {
  return (
    <section id="trending-finds" className="scroll-mt-36 bg-white px-4 py-16 sm:scroll-mt-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-pink">From our YouTube Shorts</p>
        <h2 className="mt-2 font-display text-3xl sm:text-4xl">Trending Finds</h2>
        <p className="mt-3 text-ink/70">The products from our Shorts. Prices change, so check Amazon for the current one.</p>
      </div>
      <div className="mx-auto mt-10 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {TRENDING_FINDS.map((product) => (
          <ProductCard key={product.amazonUrl} product={product} />
        ))}
      </div>
      <p className="mx-auto mt-8 max-w-6xl text-center text-sm text-ink/60">{AMAZON_DISCLOSURE}</p>
    </section>
  );
}
