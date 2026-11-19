// Entry program for the make.fun bounty "Post a GTA 6 meme on X" (gta6-meme-x-01).
//
// The real entry is the X post itself: a GTA VI meme whose picture carries the
// make.fun ghost, posted publicly with the entrant's play code in its text.
// This program's single job is to hand the post's address to the grader by
// copying POST.json from the bot directory into the output directory, where
// the gate picks it up and reads the post back from X.
//
// Outside the grading container the two directories come from the environment:
//   MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFile, mkdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

async function main() {
  const source = join(botDir, 'POST.json');
  const target = join(outputDir, 'POST.json');

  // Fail loudly on a malformed pointer file instead of handing in junk:
  // POST.json must be a JSON object whose "url" names an X status address.
  const parsed = JSON.parse(await readFile(source, 'utf8'));
  if (typeof parsed.url !== 'string' || !/^https:\/\/(x|twitter)\.com\/[^/]+\/status\/\d+$/.test(parsed.url)) {
    throw new Error(`POST.json does not name an X post: ${JSON.stringify(parsed)}`);
  }

  await mkdir(outputDir, { recursive: true });
  await copyFile(source, target);
}

main().catch((err) => {
  console.error(`hand-in failed: ${err.message}`);
  process.exit(1);
});
