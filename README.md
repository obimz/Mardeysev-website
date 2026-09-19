# Mardysev Solar website

## Which page is live?

The production website is the Next.js app in `app/`.

- Homepage: `app/app/page.tsx`
- Shared styling: `app/app/globals.css`
- Site metadata: `app/app/layout.tsx`
- Additional routes: `app/app/about/page.tsx`, `app/app/services/page.tsx`, `app/app/projects/page.tsx`, `app/app/blog/page.tsx`, and `app/app/contact/page.tsx`

The root `index.html` is the original standalone HTML prototype. It is not imported by Next.js and it does not share runtime state, components, CSS, or routes with the Next.js app. It remains useful as a visual reference while the new application is developed.

## Images and media

Use original company photography, commissioned photography, or properly licensed stock images. Do not download and reuse images from the reference website unless you have permission from the copyright owner. Place approved local assets in `app/public/images/`, then reference them from the Next.js pages with paths such as `/images/project-installation.jpg`.

The hero currently uses approved local media from `app/public/images/`. Add future project photography there and reference it from the pages with paths such as `/images/project-installation.jpg`.

The footer social links currently use brand icons from `react-icons`. Replace each `href="#"` with the company&apos;s verified Facebook, LinkedIn, Instagram, and YouTube URLs before launch.

## Run the live app

```powershell
cd app
npm install
npm run dev
```

Open `http://localhost:3000`.

For deployment, configure the hosting project root as the `app/` directory. The build command is `npm run build`, and the start command is `npm run start`.

## Connecting content later

The page content is currently local to each route so the site can be reviewed without a CMS. When a content manager is selected, move the repeated content arrays into a content/API layer and keep the route components as the presentation layer. Forms also need a server action or external form endpoint before they can deliver submissions.
