# Healthcare Costs data visualization

This is a sample project for The Dataface. It loads healthcare care and displays a simple chart.

## Range chart

This chart is rendered in simple HTML and CSS. There is no need for SVG and D3 for these simple elements, so this allows for easier responsive resizing. The maximum value is currently set just slightly above the 75th percentile value. In future versions, it could be set to something more easily compared across states - for example the 75th or 95th percentile for all states.

## Responsive sizing

The page collapses into vertically stacked cards for smaller desktops and below, to give the range chart enough space to be interpretable.

## Routing

This app dynamically renders different pages based on the URL path, which should include the procedure followed by a state abbreviation.

For example, `http://localhost:3000/electrocardiogram-ekg/CA`

The homepage defaults to the first procedure. If a mispelling is entered, or the user selected a combination that doesn't exist they will receive an error message instead of the data visualization.

In production, it might make more sense to pre-render all these pages, and serve up the rendered HTML, since there isn't much interactivity required on them.
