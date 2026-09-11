# Validation

- Production build: `npm run build` passed, prerendering 21 pages, including all 16 personality results.
- TypeScript: `npm run typecheck` passed.
- Unit tests: 8 passed. Covers complete code space, score bounds, reproducibility, invalid input, 16 reachable profiles, sensory precedence, recommendation consistency, and corrupt storage recovery.
- Browser: full 16-question journey, progress restoration, back/edit, result scores, clipboard, PNG download, reload, restart passed in Chrome.
- Responsive checks: 375, 768, 1280 px, for home, quiz, encyclopedia, result; no horizontal overflow.
- Keyboard radio selection and unavailable localStorage fallback passed.
- Browser suite: all 7 tests passed in 14.1 seconds. All 16 result pages display decoded character images without inventing personal scores; invalid codes show the 404 page.
- All 16 result URLs returned HTTP 200 with passport content.
- Character artwork is precompressed WebP served directly. This avoids the delayed on-demand image conversion encountered during sequential navigation.
- Mobile homepage Lighthouse: accessibility 100, best practices 100, SEO 100. This run does not measure performance. Report: `screenshots/lighthouse-mobile.json`.
- npm dependency audit after sharp update: 0 known vulnerabilities.

Not yet verified: deployment on a real Vercel domain, native share sheets in iOS/Android, Windows font rendering. Recommendation quality has not been validated against real tasting feedback.

## Brew story update

- Production build passed with 22 prerendered pages including `/brew`.
- All 11 unit tests passed, including bounded liquid levels, reversible deterministic frames, and start/end states.
- All 12 browser tests passed, including the existing quiz journey and the new brew page at 375, 768, and 1440 px.
- Brew checks cover step navigation, rewind, skip, replay, no horizontal overflow, reduced-motion static content, homepage entry and quiz exit.
- Desktop, mobile and completion screenshots are in `screenshots/brew-*.png`.
- Validated locally and reviewed before the user authorized publishing to GitHub.

## Local preview asset mismatch fix

- Reproduced the stale server on port 3000 returning 404 for its CSS and webpack chunk, leaving the whole page unstyled.
- Replaced that process with the development preview and separated `.next-dev` from production `.next` in Next.js configuration.
- Verified `/`, `/brew`, and `/types` at 375 and 1280 px on port 3000: styles loaded, no failed HTTP requests or JavaScript errors, no horizontal overflow.
- Local preview fix verified before publishing; hosted deployment status is not asserted.
