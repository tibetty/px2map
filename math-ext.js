if (!Number.prototype.toRadian) Number.prototype.toRadian = function() { return this * Math.PI / 180; };
if (!Math.sinh) Math.sinh = function(x) { return (Math.pow(Math.E, x) + Math.pow(Math.E, -x)) / 2; };
if (!Math.cosh) Math.cosh = function(x) { return (Math.pow(Math.E, x) - Math.pow(Math.E, -x)) / 2; };
if (!Math.sec) Math.sec = function(x) { return 1 / Math.cos(x); };