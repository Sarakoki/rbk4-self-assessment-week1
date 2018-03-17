var Array = function () {
var array = [];
extend(array,myArray);
return array;

};

var myArray = [];

myArray.first = function (elem) {
	for (var i = 0; i < this.array.length; i++) {
		return this.array[0]
	}
};


myArray.last = function () {
	for (var i = 0; i < this.array.length; i++) {
		return (this.array[i].length - 1)
	}
};


var extend = function(to,from) {
	for (var key in from) {
		to[key] = from[key]
	}
};


