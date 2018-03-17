var makeHashTable = function() {
  //Do not change the max!
  var max = 4;

    return {
      _storage: [],
      retrieve: function(key) {
        return this._storage[hashFn(key, max)];
      },

      insert: function(key, value) {
        this._storage[hashFn(key, max)] = value;
        var check = false;
        var bucket = this._storage.retrieve([key,value]) || []
        if (bucket === undefined) {
          var tuple = bucket[i];
          tuple.push([key,value])
          this._storage.retrieve([key,value])
        }
        else {
          if (tuple[0] === key) {
            tuple[1] = value;
            return value
          }
        }
    }
  }
};

// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};