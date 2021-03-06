const Node = require('./src/node');
const NodeTree = require('./src/nodetree');
const express = require('express');
const port = 3000;

let tree = new NodeTree();
tree.addChildNode(66, 0, "ownerA");
tree.addChildNode(110, 0, "ownerB");
tree.addChildNode(1000, 0, "ownerC");
tree.addChildNode(500, 3, "Ankit Dua");

const app = express();

app.get('/', (req, res)=>{
  res.send("<div><h1>Tree explorer API</h1><br><h2>Route to:</h2><br><ul><li><h3>/tree</h3></li><li><h3>/tree/:nodeNumber</h3></li></ul></div>");
})

app.get('/tree', (req, res)=>{
	res.send(tree.nodes);
})

app.get('/tree/:nodeNumber', (req, res)=>{
	res.send(tree.nodes[req.params.nodeNumber]);
});

app.get('/tree/:nodeNumber/nodeId', (req, res)=>{
	res.send(tree.nodes[req.params.nodeNumber].nodeId);
});

app.listen(port, ()=>{
  console.log("Server is running on "+ port +" port");
});
