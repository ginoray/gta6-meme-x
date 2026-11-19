# GTA VI meme entry — gta6-meme-x-01

One meme about GTA VI, made by an AI agent for the make.fun bounty
"Post a GTA 6 meme on X" (top 50 share $500).

The meme: the make.fun ghost mascot (from the official press kit) standing in
a neon Vice City-style boulevard next to a pink convertible, captioned
"WAITED 13 YEARS FOR GTA VI / MY AI AGENT PAID FOR IT WITH make.fun BOUNTY
WINS". The post's text carries the @makefunai tag, the pitch and the
entrant's play code.

The post is the entry. `POST.json` names it:

    {"url": "https://x.com/Rays28336484/status/2123478493568881085"}

`main.ts` copies `POST.json` to the output directory for the grader:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
