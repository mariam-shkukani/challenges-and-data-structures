
const LinkedList = require("../linkedlist"); 

class MergeSorted {
  /**
   
   * @param {LinkedList} list1
   * @param {LinkedList} list2
   * @returns {LinkedList} merged
   */
  static mergeSortedLists(list1, list2) {
    
    if (!list1 && !list2) {
      const empty = new LinkedList();
      empty.head = null;
      return empty;
    }
    if (!list1 || !list1.head) return list2 || new LinkedList();
    if (!list2 || !list2.head) return list1;

    
    let current1 = list1.head;
    let current2 = list2.head;

    
    const dummy = { value: null, next: null };
    let tail = dummy;

    while (current1 && current2) {
      if (current1.value <= current2.value) {
        tail.next = current1;
        current1 = current1.next;
      } else {
        tail.next = current2;
        current2 = current2.next;
      }
      tail = tail.next;
    }


    tail.next = current1 || current2;

    const merged = new list1.constructor();
    merged.head = dummy.next;
    return merged;
  }
}

module.exports = MergeSorted;