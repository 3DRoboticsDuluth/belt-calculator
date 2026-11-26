# Timing Belt Calculator

Static, dependency-free web app. Open index.html locally for calculations; HTTPS hosting enables offline installation and shareable public links.

## GitHub Pages
1. Create a public repository named `belt-calculator`.
2. Upload all files from this archive to the root of the main branch.
3. In Settings > Pages, choose Deploy from a branch, main, / (root), and Save.
4. Open the URL shown by GitHub Pages after deployment.

On supported mobile browsers, use Install app or Add to Home Screen. Offline operation requires a successful first online visit. Update the cache version in sw.js when changing cached assets.

## Geometry
Pitch radius = teeth × pitch / (2π). Exact open belt length = 2 sqrt(C²-d²) + π(r1+r2) + 2d asin(d/C), where d = abs(r2-r1). Reverse calculation uses bisection. Pitch-circle overlap is conservatively rejected; check actual flanges and mounting clearance separately. Stock belt sizes and tension are not verified.
