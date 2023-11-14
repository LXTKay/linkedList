"use strict"

const c = console.log;

class LinkedList {
  listHead = null;
  isEmpty(){
    if(this.listHead == null) return true;
    return false;
  }
  append(value){
    let node = new Node();
    node.value = value;
    if(!this.isEmpty()) this.tail().nextNode = node;
    if(this.isEmpty()) this.listHead = node;
  };
  prepend(value){
    let node = new Node();
    node.value = value;
    if(!this.isEmpty()){
      node.nextNode = this.listHead;
      this.listHead = node;
    } else {
      this.listHead = node;
    };
  };
  size(){
    let i = 0;
    let cNode = this.listHead;
    while(cNode != null){
      i++;
      cNode = cNode.nextNode;
    };
    return i;
  };
  head(){
    return this.listHead;
  };
  tail(){
    if(this.isEmpty()) return;
    let listTail = this.listHead;
    while(listTail.nextNode != null){
      listTail = listTail.nextNode;
    }
    return listTail;
  };
  at(index){
    let cNode = this.listHead;
    for(let i = 0; i < index; i++){
      cNode = cNode.nextNode;
    };
    return cNode;
  };
  pop(){
    if(this.isEmpty()) return;
    let cNode = this.listHead;
    while(cNode.nextNode.nextNode != null){
      cNode = cNode.nextNode;
    };
    cNode.nextNode = null;
  };
  contains(value){
    if(value == null) return true;
    if(this.isEmpty()) return false;
    let cNode = this.listHead;
    while(cNode != null){
      if(cNode.value == value) return true;
      cNode = cNode.nextNode;
    };
    return false;
  };
  find(value){
    if(this.isEmpty()) return;
    let cNode = this.listHead;
    let arrIndices = []
    let i = 0;
    while(cNode != null){
      if(cNode.value == value) arrIndices.push(i);
      cNode = cNode.nextNode;
      i++;
    };
    if(arrIndices.length = 1) return arrIndices[0];
    if(arrIndices.length = null) return;
    return arrIndices;
  };
  toString(){
    if(this.isEmpty()) return;
    let string = "";
    let cNode = this.listHead;
    while(cNode != null){
      let cString = "( " + cNode.value + " ) -> ";
      string = string + cString;
      cNode = cNode.nextNode;
    };
    string = string + this.tail().nextNode;
    return string;
  };
};

class Node {
  value = null;
  nextNode = null;
};

//Test
let list = new LinkedList();
list.append(2);
list.prepend(1);
list.prepend(0);
list.append(3);
list.append(4);
list.append(5);
c(list.toString());
c("size(): " + list.size());
c("head(): " + list.head().value);
c("tail(): " + list.tail().value);
c("list.at(1): " + list.at(1).value);
list.pop();
c(list.toString());
c("size(): " + list.size());
c("contains(4): " + list.contains(4));
c("find(4): " + list.find(4));
c(list.toString());