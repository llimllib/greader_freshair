//I had this all set up to use chrome.tabs.insertCSS, but it didn't work, so this hacky solution is better.
//

if (!window.location.href.match(/#stream/))
  window.location = "http://www.google.com/reader/view/#stream";
//See bottom of file for the insertion of this css
var css = '#gbar, #guser, .gbh, #nav,' +
'#search-restrict,' +
'#chrome #chrome-header,' +
'#chrome-viewer #viewer-header,' +
'#chrome-viewer #viewer-footer' +
'  { display: none; }' +
'  ' +
'.message-area { top: 3px; }' +
'.message-area-inner { display: none; }' +
'.message-area-text-container { display: block; font-weight: normal; font-style: italic; padding: 6px;' +
'  -webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px;  }' +
'' +
'#logo-container { position: static; text-decoration: none; color: #999; }' +
'#logo { background: none; font-size: 20px; line-height: 30px; width: auto; top: 3px; left: 24px; font-weight: normal; }' +
'#logo span { display: block; }' +
'#search { top: 6px; left: auto; right: 24px; }' +
'#search-submit { margin-left: 6px; }' +
'' +
'#entries {' +
'  height: auto !important; width: auto; position: fixed; top: 36px; bottom: 0; left: 0; right: 0;' +
'  border-top: 1px solid #EEE; }' +
'  ' +
'#entries.list #current-entry.expanded { border-width: 1px; border-color: #99F; background: #FFFFE4; margin-top: -1px; padding: 6px 1px; }' +
'#entries.list #current-entry.expanded.read { border-color: #CCC; background: #FFF; }' +
'#entries.list #current-entry.expanded .collapsed { border: none; background: transparent; margin-bottom: -24px; }' +
'.entry-comments, .entry-actions { display: none; }' +
'.entry.expanded .collapsed .entry-main { display: none; }' +
'' +
'#entries.list .entry-container { margin: 0; background: transparent; overflow: hidden; }' +
'.entry .entry-main { margin-left: 1em; }' +
'' +
'.read .entry-title { font-weight: normal; }' +
'.read { background-color: #FFF; }' +
'.entry .entry-title { max-width: 100%; margin-right: 10em; }' +
'#entries.list .read .collapsed { background:#FFF; }' +
'#entries.list .entry .collapsed { border: 2px solid #FFF; }' +
'#entries.list .entry { border-bottom: 1px none #FFF; }' +
'a.entry-original:after, .entry-title-link:after { content: " \\2192"; opacity: 0.3; }' +
'a.entry-original { background: none !important; text-decoration: none; }' +
'a.entry-original:hover:after, .entry-title-link:hover:after { opacity: 1; }' +
'.entry-title-go-to { display: none !important; }' +
'' +
'.item-body { max-width: 600px; font-size: 18px; line-height: 1.5; font-family: "Georgia"; }' +
'.item-body a { text-decoration: none; color: #44C; }' +
'' +
'.star { background-image: none !important; text-decoration: none; display: none !important; }' +
'.star.item-star-active { color: #ED2; }' +
'.star:after { content: "\\02605";  }' +
'' +
//message area seems to never disappear under this extension, just kill it
'.message-area { display: none !important; } '

console.log("sending request");
//chrome.extension.sendRequest({"inject": true}, function(response) { });
var style = document.createElement("style");
style.type = "text/css";
style.appendChild(document.createTextNode(css));
document.getElementsByTagName('head')[0].appendChild(style);
