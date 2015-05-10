function Shelf (name) {
  this.name = name;
  this.books = [];
  this.addBook = function(book){
    this.books.push(book);
  };
  this.removeBook = function(book){
    for (var i=0; i<this.books.length;i++) {
      if (book === this.books[i]) {
        this.books.splice(i, 1);
      };
    };
  };
  this.showBooks = function () {
    for (var i=0;i<this.books.length;i++) {
      console.log('"'+this.books[i].title+'" by ' + this.books[i].author);
    }
    if (this.books.length === 0) {
      console.log("There are no books on this shelf. Please add one.");
    };
  };
  this.bookPosition = function(name) {
    for (var i=0;i<this.books.length;i++) {
      if (name === this.books[i]) {
        console.log(i);
      };
    };
  };
};
