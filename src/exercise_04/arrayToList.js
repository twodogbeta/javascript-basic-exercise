export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.
  if (array === null || array === undefined) throw new Error('Creating list from undefined array');
  if (array.length === 0) throw new Error('Creating list from empty array');
  class LinkedNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }

    const LinkedList = [];
    for (let i = array.length - 1 ; i >= 0; i--) {
      const item = {};
      if ((i + 1) !== array.length) {
        item.value = array[i];
        item.next = LinkedList[i + 1];
      } else {
        item.value = array[i];
        item.next = null;
      }
      LinkedList[i] = item;
    }
  
    return { value: LinkedList[0].value, next: LinkedList[0].next };
  }

}
