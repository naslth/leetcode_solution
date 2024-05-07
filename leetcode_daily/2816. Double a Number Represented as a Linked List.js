/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var doubleIt = function (head) {
  let temp = head;
  let value = [];
  let length = 0;
  while (temp) {
    value.push(temp.val);
    temp = temp.next;
    length++;
  }
  let mem = 0;
  let res = [];
  for (let i = value.length - 1; i >= 0; i--) {
    const tempRes = value[i] * 2;
    if (tempRes > 9) {
      res.push(tempRes - 10 + mem);
      mem = 1;
    } else {
      res.push(tempRes + mem);
      mem = 0;
    }
  }
  if (mem == 1) {
    res.push(mem);
  }
  res.reverse();
  console.log(res);
  let newHead;
  if (res.length > length) {
    newHead = new ListNode(res[0], head);
  } else {
    newHead = head;
    newHead.val = res[0];
  }
  temp = newHead.next;
  let i = 1;
  while (temp) {
    temp.val = res[i];
    i++;
    temp = temp.next;
  }
  return newHead;
};
