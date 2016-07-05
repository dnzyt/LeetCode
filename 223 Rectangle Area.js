/*
Find the total area covered by two rectilinear rectangles in a 2D plane.
*/

var isInRectangle = function (A, B, C, D, E, F) {
	let sum = (C - A) * (D - B) + (H - F) * (G - E);
    if (E >= C || F >= D || B >= H || A >= G) return sum;
    return sum - ((Math.min(G, C) - Math.max(A, E)) * (Math.min(D, H) - Math.max(B, F)));
}

