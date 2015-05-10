function Library () {
  this.shelves = [];
  this.addShelf = function(shelf) {
    this.shelves.push(shelf);
  };
  this.removeShelf = function(shelf){
    for (var i=0; i<this.shelves.length;i++) {
      if (shelf === this.shelves[i]) {
        this.shelves.splice(i, 1);
      };
    };
  };
  this.showShelves = function () {
    for (var i=0;i<this.shelves.length;i++) {
      console.log(this.shelves[i].name);
    };
    if (this.shelves.length === 0) {
      console.log("There are no shelves in the library. Please add one.");
    };
  };
  this.shelfPosition = function(name) {
    for (var i=0;i<this.shelves.length;i++) {
      if (name === this.shelves[i]) {
        console.log(i);
      };
    };
  };
};

var library = new Library();
