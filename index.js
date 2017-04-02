#!/usr/bin/env node
'use strict';

/*
	Author: @tibetty (xihua.duan@gmail.com)
	Description: functions to calculate longitude & latitude differences per pixel (not necessarily 1:1 map to screen map, but more like to point for mobile devices)
	Created At: 04/02/2017
*/

require('./math-ext.js');

/*
	zoom: zoom level, mandatory
	extent: tile extent in pixel, just leave it alone if you have no idea about it
*/
function deltaLngPerPx(zoom, extent) {
	extent = extent? extent : 256;		// the default title extent of major map products (Google, Apple and OSM) is 256 pixels
	let n = Math.pow(2, zoom);
	return 180 / (n * extent);
}

/*
	zoom: zoom level, mandatory
	lat: latitude in degree, mandatory
	extent: tile extent in pixel, just leave it alone if you have no idea about it
*/
function deltaLatPerPx(zoom, lat, extent) {
	extent = extent? extent : 256;
	let latRd = lat.toRadian(lat);
	let n = Math.pow(2, zoom);
	let t = Math.PI * (1 - Math.log(Math.tan(latRd) + Math.sec(latRd)) / Math.PI);
	return 180 * Math.cosh(Math.PI - t) / (Math.pow(Math.sinh(Math.PI - t), 2) + 1) / (n * extent);
}

module.exports = {
	deltaLngPerPx: deltaLngPerPx,
	deltaLatPerPx: deltaLatPerPx
};