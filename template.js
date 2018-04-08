var myPlugin = new iChatPlugin(name, parser[, other information]);
/* 
The Parser
ts: Contains the raw, unformatted timestamp representing when the message was sent.
u: Contains the username of the user who sent the message.
txt: Contains the text of the message itself.
*/

iChat.onload = function() {
  iChat.registerPlugins(pluginObj1[, pluginObj2[, pluginObj3...]]);
}
