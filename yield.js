module.exports = function(RED) {

  if (false) { // Test for nodes compatibilities
    throw "Info : not compatible"
  }

  function NodeConstructor(config) {
    RED.nodes.createNode(this, config)
    var node = this

    node.on('input', function(msg) {
      if (Array.isArray(msg.payload)) {
        if (msg.payload.length === 0) {
          return node.send(msg)
        }
        msg.payload.map(function (message) {
          node.send(message)
        })
      } else {
        node.send(msg)
      }
    })
    node.on("close", function() {
    })
  }
  RED.nodes.registerType("yield", NodeConstructor)
}
