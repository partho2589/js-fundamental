var bookPages = [ 'fast', 'secent', 'third', 'fourth'];
 
var bookIndex = bookPages.indexOf('secent');

// console.log(bookIndex);
var second = bookPages[2];
// console.log(second);
function generatePin(){ 
    return Math.floor(Math.random()*90000) + 10000; 
  }
  generatePin()