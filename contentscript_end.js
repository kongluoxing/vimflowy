
var scripts = [ 
    "keybindings.js",
    "transparentKeybindings.js",
    "vimflowy.js",
    // "custom_font.js"
    ];

var head = (document.head||document.documentElement)

for (var i=0; i < scripts.length; i++) 
{
    var s = document.createElement('script');
    s.src = chrome.extension.getURL(scripts[i]);
    head.appendChild(s);
    s.onload = function() {
        this.parentNode.removeChild(this);
    };
}
