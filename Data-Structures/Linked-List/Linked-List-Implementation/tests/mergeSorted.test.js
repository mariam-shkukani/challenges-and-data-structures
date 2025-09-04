// file: MergeSortedLinkedLists.test.js
const { LinkedList } = require('../linkedlist');
const MergeSorted = require('../MergeSorted/mergeSorted');

function listToArray(list) {
  const arr = [];
  let cur = list.head;
  while (cur) {
    arr.push(cur.value);
    cur = cur.next;
  }
  return arr;
}

describe('Merge Sorted Linked Lists', () => {
  test('merging when one list is empty (should return the non-empty list)', () => {
    const list1 = new LinkedList(); // empty
    const list2 = new LinkedList();
    list2.append(1);
    list2.append(2);

    const merged = MergeSorted.mergeSortedLists(list1, list2);
    expect(listToArray(merged)).toEqual([1, 2]);
  });

  test('merging when both lists are empty -> head should be null', () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();

    const merged = MergeSorted.mergeSortedLists(list1, list2);
    expect(merged.head).toBeNull();
  });

  test('merging two non-empty lists correctly', () => {
    const list1 = new LinkedList();
    list1.append(5);
    list1.append(10);
    list1.append(15);

    const list2 = new LinkedList();
    list2.append(2);
    list2.append(3);
    list2.append(20);

    const merged = MergeSorted.mergeSortedLists(list1, list2);
    expect(listToArray(merged)).toEqual([2, 3, 5, 10, 15, 20]);
  });
});