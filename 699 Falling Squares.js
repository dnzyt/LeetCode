

var fallingSquares = function (positions) {

    var ans = []
    var intervals = []
    var maxHeight = Number.MIN_SAFE_INTEGER

    for (var i = 0; i < positions.length; i++) {
        var start = positions[i][0]
        var end = start + positions[i][1]

        var baseHeight = 0

        for (var j = 0; j < intervals.length; j++) {
            var interval = intervals[j];
            if (interval.end <= start || interval.start >= end) continue

            baseHeight = Math.max(baseHeight, interval.height)
        }

        var newHeight = baseHeight + positions[i][1]

        var intv = {
            start: start,
            end: end,
            height: newHeight
        }
        intervals.push(intv)


        maxHeight = Math.max(maxHeight, newHeight)
        ans.push(maxHeight)

    }


    return ans;
}

// interval -> start, end, height