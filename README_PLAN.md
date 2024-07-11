11/7/24
Order the future cards.
Add type interfaces.

CARDS
** Finalise home page styling **
- Research deisgn ideas.
- Update current styling.

** Extract data objects to a central location **
- app/page.tsx breathing methods.
- ControlPanel.

** Create a layout component **
- Use for max width on 4k screens.
- Use for consistent responsive sizing at smaller screen resolutions.

** Navbar **
- Can be used across all breathing pages (not required in the home page).
- Include links to all other pages.
- Include a reset user/cookies consent button to clear cookies consent.
- Use a burger icon on all page sizes.
- Clicking the icon should open a side panel that animates into the page from the right.

** Implement type interfaces where there are more than 3 prop types **
- Check the entire code base for occurences.
- Decide if the types should live in the .tsx file or if they can be moved to a types.ts file.

** Tooltip component **
- Review work tooltip.
- Research accessibility standards for tooltips.
- Should be atomic.
- It will need to take a text prop and a position prop.
- The text prop should have a max length. Text should be shortened to ellipses if the text exceeds the max length.
- The position prop will position the tooltip to a default location (top) unless it is cut off at the edge of the screen.

** Add an icon button option to the button component
- Review options/ideas.
- Use an iconButton variant.

** Button animation styling (icon and regular) **
- Add a drop shadow to the regular buttons.
- Animate the buttons on click to appear to move (change colour and size).

** Organise the order of imports **
- All files should import in a similar order according to import type.
- Fine the file with the most imports to work out the default order.
- Replicate the default order in all other files.

** Start planning user info storage **
- Type of data to store.
- Methods for adding to local storage.
- Methods for retrieving data.
- How to display data (side panel?)

** Make the Overlays component atomic **
- Pass in the modals to display as props or children.
- use the componnet in each breathing method.

** Review file structure for components **
- Is it logical?
- Are Layout components actually layoiut components?
- Are container components actually Container components?
- Is there a better structure that I could use?

** Set up SEO for the page **
- Review NextJS documentaion for SEO then plan methodology.

** Add text overlay to the ambient display **
- The text should show once on initial loading and only display for 4 seconds.

** Finalise instructions **
- Add to the modal.
- Review modal styling and element spacing. Consider using flex proportions or grid.


Advanced and unnecessary features for the sake of coding...
- Load spinner, possibly built into the breathing component.
- Tracking progress, circular progress bar in the user profile modal.
- Backend (node server js?).
- FormData component.

https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts
https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame