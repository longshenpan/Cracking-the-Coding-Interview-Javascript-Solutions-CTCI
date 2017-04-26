'use strict';

export default class Project {
  constructor(name) {
    this.name = name;
    this.dependencies = 0;
    this.children = new Map();
  }

  getName() {
    return this.name;
  }

  addNeighbor(node) {
    if (!this.children.has(node)) {
      this.children.set(node.getName(), node);
      node.incrementDependencies();
    }
  }

  incrementDependencies() {
    this.dependencies++;
  }

  decrementDependencies() {
    this.dependencies--;
  }

  getNumberDependencies() {
    return this.dependencies;
  }

  getChildren() {
    return this.children;
  }

}
