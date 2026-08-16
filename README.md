# Sunrise with Ali — Personal Website

A single-page site with three tabs: **Information**, **YouTube**, and **Social Media**.
Plain HTML/CSS/JS — no build step, no dependencies to install.

## Files
- `index.html` — page structure and content
- `styles.css` — dark "sunrise" theme
- `script.js` — tab switching

## ⚠️ One thing to fix first
Your second and third YouTube playlist links both pointed to the same playlist ID
(`PLYpaLxn1Kt1nb7uHfoJPmWDjXhtZ2m1la`). I used that ID for both "Playlist Two" and
"Playlist Three" for now. In `index.html`, search for `TODO` to find the third
playlist embed and replace the ID in the `src` with your correct third playlist's ID
(the part after `list=` in its URL).

## Host it free on GitHub Pages

1. **Create a repository**
   - Go to [github.com/new](https://github.com/new)
   - Name it anything, e.g. `sunrise-with-ali` (or `<your-username>.github.io` if you want it at the root of your GitHub domain)
   - Make it **Public**, then click **Create repository**

2. **Upload the files**
   - On the new repo's page, click **"uploading an existing file"**
   - Drag in `index.html`, `styles.css`, and `script.js`
   - Click **Commit changes**

3. **Turn on Pages**
   - Go to **Settings → Pages** (left sidebar)
   - Under **Build and deployment → Source**, choose **Deploy from a branch**
   - Branch: **main**, folder: **/ (root)** → **Save**

4. **Visit your site**
   - After a minute or two, GitHub shows your live URL at the top of the Pages settings page
   - It'll look like: `https://<your-username>.github.io/sunrise-with-ali/`
   - (If you named the repo `<your-username>.github.io`, your site is just `https://<your-username>.github.io/`)

## Making changes later
Edit any file directly on GitHub (pencil icon on the file page) and commit — the
live site updates automatically within a minute or two.

## Adding a profile photo later
If you'd like to add a photo, upload an image file (e.g. `photo.jpg`) to the repo,
then in `index.html` add near the top of the `<header class="hero">` section:

```html
<img src="photo.jpg" alt="Ali M. Ali" class="profile-photo">
```

and in `styles.css` add:

```css
.profile-photo {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 1.5rem;
  display: block;
  border: 2px solid var(--sun-amber);
}
```
