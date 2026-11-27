# Timing Belt Calculator

[Open the live Timing Belt Calculator](https://3droboticsduluth.github.io/belt-calculator/)

Size a timing belt for an open two-pulley drive, or find the center-to-center spacing for a belt you already have. The calculator draws the belt path and shows which nearby belt tooth counts fit the nominal geometry and how much each would change the pulley spacing.

## How to use it

1. Choose a belt pitch and enter the tooth count for each pulley. The calculator supports 2 mm GT2 and HTD 3M, 5M, 8M, and 14M.
2. Choose **Belt tooth count** if you know the center distance, or **Center distance** if you know the belt tooth count. Distance inputs and results support millimeters and inches.
3. Check the nearby belt sizes and their required center distances. The drive specifications also show the pulley pitch diameters, drive ratio, and estimated wrap and teeth in engagement on the smaller pulley.

For example, two 20-tooth GT2 pulleys spaced 100 mm apart call for a **120-tooth belt** with a **240 mm pitch length**. Use **Copy configuration link** to share your inputs.

## How the math works

The calculator uses pulley pitch circles and the exact nominal open-belt geometry. It adds the two straight spans and the two wrapped arcs to find the belt pitch length. In reverse mode, it uses bisection to find the center distance that gives the target belt length. The [illustrated calculation guide](https://3droboticsduluth.github.io/belt-calculator/guide.html) walks through the equations and the GT2 example in both directions.

The model assumes an open drive with two pulleys and no idlers. Before choosing a belt, confirm stock availability, pulley and flange clearance, manufacturer engagement requirements, and room to install and tension the belt.

## Offline and local use

The project is a static web app with no external dependencies. After a successful online visit and cache setup, the hosted calculator and guide work offline. On supported browsers, use **Install app** or **Add to Home Screen**. For local use, keep the repository files together and open `index.html` in a browser.
