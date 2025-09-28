---
title: "SSR, SPA, SSG, Hydration – Web rendering explained simply"
description: "Easy to understand guide related to different web rendering techniques and when to use each one."
date: "2025-09-28"
tags: ["performance", "frontend", "optimization", "real world examples"]
readingTime: "6 min read"
---

# SSR, SPA, SSG, Hydration – Web rendering explained simply

For someone just entering the programming world, all these rendering techniques can feel overwhelming. Even developers with years of experience might struggle to distinguish between different rendering techniques and how and when to use each of them.

Okay, let's start with a few questions which will let us understand easily how to choose proper technique for certain situation:

## Do you need SEO? In other words do you need world to know and care about your application?
- **If you don’t**, go with **CSR**.
  Client Side Rendering means that your app renders on client side - in the browser, not on the server where you app is deployed.
  This approach gives users better experience during usage of app.
  When you do CSR then your app becomes SPA. It stands for Single Page Application.
  That means from server usually is returned only plain div and all content is being generated in user's browser.

- **If you do need to world to know about your app**, the straightforward choice is **SSR**.
  Server Side Rendering means the server renders html ready for display to user without leaving anything to render on client machine.
  This ensures search engines can properly crawl your application.
  It’s the traditional web rendering approach, and for many projects, it’s more than enough.

Previously SPA meant completely zero SEO but now crawlers are getting smart and even SPA apps are being indexed in search engines.
They are not winning with simple SSR, but it is not bad as it was a few years back then.

## Does your content change often, or you have many pages that changes nearly never?
- **If it changes almost never, contains static pages with text**, go with **SSG**
  Static Site Generation pre-builds all your pages at build time.
  This means your pages are already rendered as html and ready for serve when the request from user comes.
  Perfect for blogs, documentation sites, or marketing pages.

- **If it changes often, requires calculations or dynamic content for example from database**, go with **SSR**
  Server Side Rendering returns ready html handled completely on server side.
  Handles fetching data from database and other external sources and returns to client everything needed.
  While using SSR heaviest part for rendering is on the server and when CSR then this most hardware eating part is on client side in the browser.

## Do you have content that changes rarely but cyclic? One a week? Once a month?
ISR (Incremental Static Regeneration) is SSG but on steroids. It lets you decide how frequently you want to refresh (regenerate) content of your pregenerated page.

For example:
- Blog posts could be pre-rendered once and then re-generated every 24 hours.
- A product catalog page could update every 5 minutes.

Using this technique you get benefits of static pages with flexibility of keeping content up-to-date.

## Examples which you can experience in day-to-day basis

Let's make this more concrete:

- **CSR**: internal tools in companies, admin panels (best UX)
- **SSR**: E-commerce product pages, news articles (SEO-critical)
- **SSR + Hydration**: YouTube, Instagram (user-specific, interactive)
- **SSG**: Documentation sites, personal blogs, marketing pages (content rarely changes)
- **ISR**: E-commerce catalogs, news sites, weather apps (periodic updates)

## Framework recommendations

- **CSR**: Vue, React, Angular
- **SSR + Hydration**: Nuxt.js, Next.js
- **SSR**: Laravel, Django, Spring Boot, ASP.NET Core
- **SSG**: Nuxt.js, Next.js, Astro
- **ISR**: Nuxt.js, Next.js

## Summarization
At first, terms like CSR, SSR, SSG, and ISR sound like someone decided to complicate frontend for some reason.
But they’re just **different tools for balancing SEO, performance, and user experience**.

- Want the best UX and you don't care about searching engines? **CSR**.
- Want good SEO? **SSR**.
- Want both? **SSR + hydration**.
- Rarely-changing content? **SSG**.
- Rarely-changing content but with scheduled rebuilds? **ISR**.

Every technique has it's pros and cons.
SSR might be easy to introduce, but you lose flexibility that gives you CSR.
Introducing CSR might cause you SEO problems so you can consider SSR + Hydration, but unfortunately it makes application more complex.
Always remember to choose right tool for right job, don't choose tool first and then figure out what should be done.
