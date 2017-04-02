<h1>px2map</h1>
<p>px2map, functions to calculate WGS84 longitude/latitude differences (deltas) per pixel (please notice it's not necessarily the actual screen pixel, but more like logic point for mobile devices).</p>

<h1>Usage</h1>
<p>// Initialization<br>
const px2map = require('px2map');<br>
// When you want to submit a promise<br>
let deltaLng = px2map.deltaLngPerPx(&lt;zoom level&gt;[, &lt;tile extent in pixel&gt;]);<br>
let deltaLat = px2map.deltaLatPerPx(&lt;zoom level&gt;, &lt;latitude&gt;[, &lt;tile extent in pixel&gt;]);</p>
<h1>Dependency</h1>
<p>No third party dependency</p>