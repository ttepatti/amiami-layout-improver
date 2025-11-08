// ==UserScript==
// @name         AmiAmi Layout Improver
// @namespace    http://tampermonkey.net/
// @version      2025-11-08
// @description  Scales amiami picture layouts from 150px max to 500px max
// @author       tim
// @match        https://www.amiami.com/eng/search/list*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

document.head.append(Object.assign(document.createElement("style"), {
    type: "text/css",
    textContent: `@media screen and (min-width: 768px) {
        .newly-added-items__item {
            width: 500px;
        }
        .newly-added-items__item__image_item img {
            max-height: 500px;
        }
    }`
}))