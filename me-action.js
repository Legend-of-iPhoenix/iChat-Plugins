var me = new iChatPlugin("action/me", function(data) {
    if (data.txt.startsWith("/me ")) {
      data.txt = "***"+data.u+" "+data.txt.substring(4);
      data.u = null;
    }
    return data;
}, "Written by jcgter777, using code from iPhoenix.");

iChat.onload = function() {
    iChat.registerPlugin(me);
}
