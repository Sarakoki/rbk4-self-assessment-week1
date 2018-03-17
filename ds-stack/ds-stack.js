var Stack = function() {
    this._storage = [];
    


    this.add = function(value){
      for (var i = 0; i < this._storage.length; i++) {
        this._storage.push(value)
      }
     
    };
    this.remove = function() {
      for (var i = 0; i < this._storage.length; i++) {
    	this._storage[i].splice(this._storage[i],1)
    };
  };
};