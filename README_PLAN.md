#Long Term
Create a user profile modal (needs more thought).
- local storage.
Styling and accessibility.
SEO
Tooltips (separate component).

Adsavnced and unnecessary features for the sake of coding...
- load spinner, possibly built into the breathing component.
- tracking progress, circular progress bar in the user profile modal.
- backend (node server js?).
- formData component.


----------------------------
Refer to the advanced React course for best practice.
- style custom settings
- convert px to rem
- layout container for max width (4k res etc) and responsive sizing.
- responsive sizing
- consistency of CSS
- consistency of imports
- create "Ambient Breathing" component with animated gradients


// cookies consent/authorization to record user data = sets cookie if approved so that consent doesn't show again.
// - will need 'clear user data' button and 'clear cookie consent button' (footer?)
// user data button that opens a modal with user data fetched from local stroage. May need to be in Navbar.

https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts
https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame

4/7/24
Add ambient breathing view
- full screen modal uisng overlays component
- animated radial gradient (animation speed 5.5 breathing rate continuously)
- popover/banner = "press F12 for full screen and escape etc" 4 sedond display
- close 'X' button that shows on when the mouse moves

Basic homepage structure aqnd styling
- Cards for each breathing method
- Link button that directs to the page
- Button that links to 'Ambient' mode

Make an atomic ResponsiveButtonContainer and use in all current locations

Implement type interfaces where there are more than 3 prop types

Decide on the deign for the home page


Work out 'cards' and requirements for the next stage of development