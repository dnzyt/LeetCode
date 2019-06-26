
var WordFilter = function(words) {
    this.filter = {}
    for (var idx = 0; idx < words.length; idx++) {
        var prefixes = ['']
        var suffixes = ['']
        var word = words[idx]
        for (var i = 0; i < word.length; i++) {
            prefixes.push(prefixes[i] + word[i])
            suffixes.push(word[word.length - i - 1] + suffixes[i])
        }
        for (var p of prefixes) {
            for (var s of suffixes) {
                this.filter[p + '_' + s] = idx
            }
        }
    }
}


WordFilter.prototype.f = function(prefix, suffix) {
    if (this.filter.hasOwnProperty(prefix + '_' + suffix)) {
        return this.filter[prefix + '_' + suffix]
    }
    return -1
}
