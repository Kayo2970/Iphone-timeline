# iPhone Timeline

A static Apple-inspired iPhone evolution timeline (plain HTML/CSS/JS, no build step).

## Deploy to Cloudflare Pages

### Option A: Git integration (recommended)
1. Push this repo to GitHub (already done if you're reading this from the repo).
2. In the Cloudflare dashboard, go to **Workers & Pages → Create → Pages → Connect to Git**.
3. Select this repository.
4. Build settings:
   - **Build command:** (leave empty)
   - **Build output directory:** `/`
5. Deploy. Cloudflare will redeploy automatically on every push.

### Option B: Wrangler CLI
```bash
npm install
npx wrangler login
npm run deploy
```
This runs `wrangler pages deploy . --project-name=iphone-timeline`, which uploads the current directory as a Pages deployment.
