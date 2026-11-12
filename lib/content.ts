export const BRAND = "TrendDrop";
export const LEGAL_NAME = "FortuneCreations, LLC";
export const CONTACT_EMAIL = "fortunecreationsut@froyorobo.com";
export const SIGNUP_URL = "https://buy.stripe.com/bJedRb2Bj0fub6a5Hx5ZC00";
export const PRICE = "$9/month";
export const PRICE_AMOUNT = "$9";
export const TRIAL_LABEL = "7-day free trial";
export const NICHES = [
  ["Real Estate","From luxury listings to local market trends."],
  ["Digital Marketing","SEO trends, ad copy inspiration, and growth hacks."],
  ["Business & Entrepreneurship","Startup news, side hustle ideas, and founder stories."],
  ["PFAS & Forever Chemicals","Environmental advocacy and public health updates."],
  ["UTV & Off-Roading","Trail riding tips and gear reviews."],
  ["Road Cycling","Training routines and scenic route discoveries."],
  ["Fitness & CrossFit","Workout inspiration and nutrition advice."],
  ["DIY Home Projects","Home improvement hacks and creative ideas."],
  ["Food & Restaurant","Chef tips and culinary trends."],
  ["Wellness & Holistic Health","Mindfulness and holistic lifestyle content."],
  ["Personal Finance","Investing strategies and budgeting tips."],
  ["Travel & Adventure","Destination guides and travel hacks."],
];
export const AUDIENCES = [
  ["📱","Content Creators","See what's going viral in your niche before everyone else. Get inspiration for your next video from what's actually working right now."],
  ["🔬","Researchers & Advocates","Track how topics like PFAS, health trends, or social issues are spreading on TikTok. Stay on top of the conversation in real time."],
  ["🏢","Business Owners & Marketers","Know what your audience is watching and sharing. Use trending content as the backbone of your social media strategy."],
  ["🏆","Coaches & Educators","Know what's resonating in your field. Understand the content that's connecting with your target audience every single day."],
];

export type SampleVideo = {
  rank: string;
  creator: string;
  caption: string;
  views: string;
  extras?: string;
  why: string;
  how: string;
  url: string;
};

export const SAMPLE_EMAIL = {
  pulledOn: "November 12, 2026",
  niche: "DIY Home & Kitchen Gadgets",
  heading: "Top 3 Viral DIY Home & Kitchen Gadgets TikToks — November 12, 2026",
  label: "Real sample from November 12, 2026",
  videos: [
    {
      rank: "🥇 #1 Most Viral",
      creator: "@diy.world.8",
      caption: "DIY home decoration 2026 part 1",
      views: "69.1M",
      extras: "4.43% engagement rate",
      why: "It leads with a finished, easy-to-understand home makeover, then walks through a copyable process and labels the video as part 1 of a series — giving people a reason to watch and come back.",
      how: "Open on the finished room, keep the project specific and repeatable, and number it as a series so viewers know more transformations are coming.",
      url: "https://www.tiktok.com/@diy.world.8/video/7657603582392421645",
    },
    {
      rank: "🥈 #2 Most Viral",
      creator: "@socialmediakingg",
      caption: "DIY home decoration 2026 part 4",
      views: "40.1M",
      extras: "5.9% engagement rate",
      why: "The same series format is still pulling huge reach on later episodes. Viewers already know the payoff — a clear DIY transformation — and keep watching the next installment.",
      how: "Repeat a winning format with a new project. Keep the caption and structure consistent (\"part 4,\" same style of reveal) so the audience recognizes the series instantly.",
      url: "https://www.tiktok.com/@socialmediakingg/video/7664240723646057735",
    },
    {
      rank: "🥉 #3 Most Viral",
      creator: "@mrs.nikialexa",
      caption: "This kitchen tool is a game changer!",
      views: "30.1M",
      extras: "2.2M likes · 9.3% engagement rate",
      why: "A confident personal verdict is tied to one specific kitchen job. The 14-second clip opens on an on-screen \"AMAZON kitchen must-have\" claim, then cuts through close-up demos with a voiceover and almost no wasted time.",
      how: "Start with a bold on-screen claim in the first 2 seconds, jump straight into tight close-ups of one tool doing a real job, keep it around 15 seconds, and end with a clear personal verdict.",
      url: "https://www.tiktok.com/@mrs.nikialexa/video/7680933683120835862",
    },
  ] satisfies SampleVideo[],
};

export const FAQ: [string, [string,string][]][] = [
 ["About the Service",[
  ["What exactly is TrendDrop?","TrendDrop is a daily TikTok monitoring service. We track TikTok every day across your chosen niche and email you the top 3 most viral videos each morning. Think of us as your personal TikTok research assistant — running 24/7 so you don't have to."],
  ["What niches can you track?","Almost anything. If people are posting about it on TikTok, we can track it. Popular niches include real estate, digital marketing, fitness, DIY home improvement, PFAS and environmental topics, business, food, travel, off-roading, cycling, personal finance, and hundreds more. If you have a niche in mind, just tell us — we'll make it work."],
  ["How viral are the videos you send?","We rank videos by a combination of total views, engagement rate (likes + comments + shares relative to views), and recency. The videos we send are genuinely trending — not just popular old videos. On active days in popular niches, the top video typically has hundreds of thousands to millions of views."],
  ["What time does the email arrive?","Your daily digest arrives every morning, 7 days a week."],
  ["What does the email look like?","It's a clean, mobile-friendly email with the top 3 videos listed in order. Each entry shows the creator's username, video description, view count, like count, comment count, share count, and a direct \"Watch on TikTok\" button."],
 ]],
 ["Setup & Account",[
  ["How long does setup take?","After you complete checkout and fill out the niche request form, your scraper will be configured within 72 hours. You'll receive your first daily digest the morning after setup is complete."],
  ["What information do I need to provide?","Just your email address and your niche. The more specific you are, the better. For example \"UTV trail riding in the American Southwest\" will give you more targeted results than just \"UTVs.\""],
  ["Can I change my niche?","Yes. You get one free niche change every 3 months. Just email us with your new niche and we'll update it within 72 hours."],
  ["What if I want to track two different niches?","Each membership tracks one niche. To track multiple niches, simply purchase additional memberships."],
 ]],
 ["Billing & Cancellation",[
  ["How does billing work?","Start with a 7-day free trial. After the trial, you'll be billed $9, then every 30 days after that. Billing and cancellation are handled securely through Stripe."],
  ["How do I cancel?","Cancel anytime. Billing and cancellation are handled securely through Stripe. Manage or cancel your membership using the link in your Stripe receipt email. No phone calls, no cancellation fees. If you cancel during the trial, you will not be charged. If you cancel after the trial, your service will continue until the end of your current billing period."],
  ["Do you offer refunds?","Cancel anytime during the 7-day free trial and you will not be charged. After the trial, your first paid month is non-refundable. Cancel anytime and you will not be charged for any further months — no questions asked."],
  ["Is there an annual plan?","Not currently. We offer monthly billing only."],
 ]],
 ["Technical",[
  ["Do I need to download anything?","No. TrendDrop is delivered entirely by email. No app, no browser extension, no dashboard required."],
  ["Which email providers does this work with?","Most email providers — Gmail, Outlook, Yahoo, iCloud, business email, and most others will work."],
  ["What if an email lands in my spam folder?","Add our sending address to your contacts after your first email arrives and it will never go to spam again. We'll include instructions for this in your welcome email."],
  ["What if no viral videos exist in my niche on a given day?","On low-activity days we'll send you the best available content and note in the email that activity was lower than usual that day. This is rare for most niches."],
 ]],
];
