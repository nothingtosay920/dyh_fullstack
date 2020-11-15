/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
// 实现一种算法，找出单向链表中倒数第 k 个节点。返回该节点的值。
function ListNde(val) {
    this.val = val;
    this.next = null;
}
const node1 = new ListNde(1)
const node2 = new ListNde(2)
const node3 = new ListNde(3)
const node4 = new ListNde(4)
node1.next = node2
node2.next = node3
node3.next = node4
const map1 = new Map();
const map2 = new Map();
var kthToLast = function(head, k) {
    let firstNode = head
    let secoundNode = head
    while (k-->0) {
        map1.set(firstNode, true);
        firstNode = firstNode.next;
    }
    while (firstNode != null) {
        map1.set(firstNode, true);
        firstNode = firstNode.next;
        map2.set(secoundNode, true);
        secoundNode = secoundNode.next;
    }
    return secoundNode.val
};
kthToLast(node1, 2)