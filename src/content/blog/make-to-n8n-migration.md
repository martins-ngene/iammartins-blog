---
title: "Migrating from Make.com to self-hosted n8n"
description: "Why we moved our automation workflows off a hosted platform, what broke, and what I'd tell my past self before starting."
pubDate: 2026-01-20
tags: ["automation", "devops", "engineering"]
draft: false
---

Make.com got us moving fast. It also got expensive, opaque under load, and impossible to version-control. Here's the migration to self-hosted n8n — the good, the tedious, and the one thing that nearly derailed it.

## Why leave a tool that worked

Three pressures stacked up: per-operation pricing that punished success, no real way to diff a workflow in review, and a ceiling on how much custom logic we could sneak in before fighting the UI. Self-hosted n8n trades a monthly bill for a container we own and workflows we can export as JSON.

## The tedious middle

Most of the work was unglamorous: rebuilding each scenario node by node, because there's no clean automated path between the two. The upside is you re-examine every workflow you'd stopped looking at, and kill the ones nobody needed.

## The thing that nearly derailed it

Webhooks. Every external service pointing at a Make endpoint had to be repointed, and a couple of them only let you change the URL by opening a support ticket. Budget for that. It's not hard — it's just slow and out of your hands.

## Was it worth it

Yes, but not on day one. The payoff is downstream: workflows in git, no per-operation anxiety, and room to run custom code without contorting around a UI. If your automation is still small, stay hosted. The moment it becomes infrastructure, own it.
