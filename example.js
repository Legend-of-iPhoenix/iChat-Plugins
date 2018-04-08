var bold = new iChatPlugin("default/bold", function(data) {
    data.txt = data.txt.replace(/\*(.*)\*/g, '<strong style="display: inline-block;">$1</strong>');
    return data;
}, "Written by _iPhoenix_, using code from UniChat.");

iChat.onload = function() {
    iChat.registerPlugin(bold);
}
