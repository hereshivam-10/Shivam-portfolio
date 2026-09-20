# Shivam Bhardwaj — Portfolio

Video Editor & AI Content Creator. Built with Next.js (App Router), TypeScript, Tailwind CSS and Motion (framer-motion).

## 1. Install

Requires Node.js 18.18 or newer.

```bash
npm install
```

## 2. Run locally

```bash
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
npm run typecheck  # TypeScript check
```

## 3. Replace project videos

All projects live in one file: **`data/projects.ts`**.

1. Compress the video (see the ffmpeg command below) and put it in `public/videos/`, e.g. `public/videos/beauty-parlour.mp4`.
2. In `data/projects.ts`, find the project and set `video: "/videos/beauty-parlour.mp4"`.
3. Set `orientation` to `"portrait"` (9:16) or `"landscape"` (16:9).

A project with no `video` shows as a "Video coming soon" tile, so you can add work one project at a time.
You can also host videos elsewhere and paste a full `https://…` URL into `video`.

**Recommended export:** H.264 MP4, 1080p (1920×1080 or 1080×1920), 30 fps, under about 8 MB per clip.

```bash
# landscape
ffmpeg -i input.mp4 -vf "scale=1920:1080,fps=30" -c:v libx264 -crf 25 -preset slow \
  -pix_fmt yuv420p -c:a aac -b:a 96k -movflags +faststart public/videos/name.mp4

# vertical
ffmpeg -i input.mp4 -vf "scale=1080:1920,fps=30" -c:v libx264 -crf 25 -preset slow \
  -pix_fmt yuv420p -c:a aac -b:a 96k -movflags +faststart public/videos/name.mp4
```

The showreel is `public/videos/showreel.mp4`. Replace that file (or change the path in `showreel` at the top of `data/projects.ts`).

## 4. Replace thumbnails

Thumbnails are 16:9 `.webp` images in `public/images/` (1280×720 is plenty). Grab a frame:

```bash
ffmpeg -ss 3 -i public/videos/name.mp4 -frames:v 1 -vf scale=1280:720 frame.png
```

Convert to WebP with any tool (Squoosh, `cwebp`), save as `public/images/name.webp`, then set `thumbnail: "/images/name.webp"` in `data/projects.ts`.
For vertical videos, put the frame in the centre of a 16:9 canvas over a blurred copy of itself (the current thumbnails are made this way).

Other images:
- `public/images/portrait.webp` — hero portrait (transparent cutout, shown in black and white by CSS; the file itself is unedited)
- `public/images/og.jpg` — 1200×630 social sharing image
- `app/icon.svg` — favicon

## 5. Update social links and text

Open **`data/site.ts`**. Email, WhatsApp number, Instagram handle, tools, services, process steps, about text and section headings are all there.

Project labels:
- `origin: "client"` shows "Client work". Only use it for real client projects.
- `origin: "personal"` / `"spec"` show "Personal project" / "Spec project".
- Leave `origin` out to show no label.

Add each project's real `tools` (e.g. `["Veo", "CapCut"]`) and, optionally, a `process` list of steps. They appear in the project window when filled in.

## 6. Deploy to Vercel

1. Push this folder to a GitHub repository.
2. On vercel.com choose **Add New → Project** and import the repository. Vercel detects Next.js; keep the defaults.
3. Click **Deploy**.

Optional: set `NEXT_PUBLIC_SITE_URL` (for example `https://yourname.com`) in Project Settings → Environment Variables so social preview links use your own domain. Without it, Vercel's production URL is used automatically.

GitHub file limit: individual files must be under 100 MB. Keep each video well below that.

## How video loading works

- Nothing autoplays. The page loads poster images only.
- On desktop, hovering a card mounts a muted preview video; on touch devices, cards use the poster and open the player on tap.
- The showreel loads its video only after Play is pressed.
- Videos use `playsInline` and `preload="metadata"`. Motion respects `prefers-reduced-motion`.

## Current project mapping

| Slot | File | Status |
| --- | --- | --- |
| AI Ad 01 | `ai-ad-01.mp4` | filled (wine bottle film) |
| AI Ad 02 | `ai-ad-02.mp4` | filled (dinosaur scene) |
| AI Ad 03 | — | placeholder |
| Hair Oil Commercial | `hair-oil-commercial.mp4` | filled |
| Beauty Parlour Commercial | — | placeholder |
| Third commercial | `interior-walkthrough.mp4` | filled, labelled Personal project |
| AI Storytelling (client) | — | placeholder |
| Educational Video (client) | — | placeholder |
| AI + Editing (spec) | — | placeholder |
| Showreel | `showreel.mp4` | built from four clips |

## Structure

```
app/          layout, page, global styles, favicon
components/   Nav, Hero, Showreel, Work, ProjectCard, ProjectModal, sections
data/         site.ts (copy + links), projects.ts (all projects)
public/       images and videos
```
