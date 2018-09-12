const Node = require('./src/node');
const NodeTree = require('./src/nodetree');

let tree = new NodeTree();

console.log("Initial Tree: ", tree.getTree(), '\n');

tree.addChildNode(66, 0, "ownerA");
tree.addChildNode(110, 0, "ownerB");
tree.addChildNode(1100, 0, "ownerC");

console.log("New Tree with 3 nodes attached to genesis: ", tree.getTree(), '\n');

tree.addChildNode(500, 3, "Ankit Dua");

console.log("New Tree with a node added to node: 0x1: ", tree.getTree(), '\n');

console.log("trying to add an invalid node: ...");
tree.addChildNode(5000, 3, "Ankit Dua");

console.log("\nediting node:#1: ...");
tree.editNodeValue(2, 59);

console.log("\changing ownership of node:#4: ...");
tree.changeOwner(3, "OwnerPQR");

console.log("Final Tree with a node 1 value edited: ", tree.getTree(), '\n');
