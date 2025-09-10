
const  LinkedList  = require('../linkedlist');

function demo() {
  const list = new LinkedList();
  [1,2,3,4].forEach(n => list.append(n));
  console.log('Original List:', 'Head ->', list.toArray().join(' -> '), '-> Null');

  list.reverse();
  console.log('Reversed List:', 'Head ->', list.toArray().join(' -> '), '-> Null');

  // single node
  const single = new LinkedList();
  single.append(10);
  console.log('Single original:', single.toArray());
  single.reverse();
  console.log('Single reversed:', single.toArray());

  // empty
  const empty = new LinkedList();
  console.log('Empty reverse result:', empty.reverse()); // should be null
}

demo();

