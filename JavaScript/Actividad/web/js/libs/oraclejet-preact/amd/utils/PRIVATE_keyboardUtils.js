define(['exports', './PRIVATE_clientHints', '../clientHints-c6bd5473'], (function(e,t,c){"use strict";const n=c.getClientHints();e.isBackspaceOrDelete=function(e){return"Backspace"===e.code||"Delete"===e.code},e.isSelectAll=function(e){return("mac"===n.platform&&e.metaKey||"windows"===n.platform&&e.ctrlKey)&&"KeyA"===e.code},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=PRIVATE_keyboardUtils.js.map
