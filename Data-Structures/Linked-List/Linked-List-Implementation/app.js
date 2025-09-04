
const { LinkedList } = require('./linkedlist');

const list = new LinkedList();

// إضافة
list.append(5);
list.append(10);
list.append(20);
list.append(30);

// طباعة
list.printList(); // Head -> 5 -> 10 -> 20 -> 30 -> null

// إزالة
list.remove(10);
list.printList(); // Head -> 5 -> 20 -> 30 -> null

// includes
console.log('includes(20):', list.includes(20)); // true
console.log('includes(10):', list.includes(10)); // false

// insertAt
list.insertAt(15, 2);
list.printList(); // Head -> 5 -> 20 -> 15 -> 30 -> null (ملاحظة: حسب المثال، بس عندنا بعد الإزالة صار 5 -> 20 -> 30، إدخال 15 عند 2 يعطي 5 -> 20 -> 15 -> 30)

// حالات حدّية:
const empty = new LinkedList();
empty.printList(); // Head -> null
console.log('remove from empty:', empty.remove(999)); // false

try {
  list.insertAt(999, 100); // خطأ
} catch (e) {
  console.error('Error inserting at invalid index:', e.message);
}

// ---------------- Merge Sorted Linked Lists ----------------
const MergeSorted = require("./MergeSorted/mergeSorted");

// قائمة 1
const list1 = new LinkedList();
list1.append(1);
list1.append(3);
list1.append(5);

// قائمة 2
const list2 = new LinkedList();
list2.append(2);
list2.append(4);
list2.append(6);


console.log("List 1 :");
list1.printList();

console.log("List 2 :");
list2.printList();


// دمج
const merged = MergeSorted.mergeSortedLists(list1, list2);

// طباعة الناتج
console.log("Merged List:");
if (typeof merged.printList === "function") {
  merged.printList(); 
} else {
  
  let cur = merged.head;
  let output = "Head -> ";
  while (cur) {
    output += cur.value + " -> ";
    cur = cur.next;
  }
  output += "null";
  console.log(output);
}