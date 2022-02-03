// ==UserScript==
// @name  do not dead name me
// @description do not get deadnamed on omnivox
// @namespace dndm
// @match http*://*.omnivox.ca
// @grant none
// @version 1.0
// @author Aurélie
// ==/UserScript==
//
// ===== Configuration =====
const deadname = ['Vincent', 'Levasseur']; // Place your deadname here
const name = ['Aurélie', 'Champoux']; // place your chosen name here
// ===== Code          =====
document.addEventListener('load', function (_ev) {
    setInterval(() => {
        renameWith('*', function (value) {
            const {innerHTML} = value;
            console.log(innerHTML);
        });
    }, 500);
});

/**
 * Rename all the element using the itateratee
 * @param options {object} options to find the element
 * @param renameHandler {(elem) => void} The renaming function
 */
function renameWith({ id }, renameHandler=(elem) => void(0)) {
    const treeWalker = document.createTreeWalker(document.body, 
        NodeFilter.SHOW_ELEMENT, function treewalker(node) {
            if (node.id === id)
                return NodeFilter.FILTER_ACCEPT;
            else
                return NodeFilter.FILTER_SKIP;
        });
    const nodes = [];
    let node = true;
    while (node = treeWalker.nextNode()) // here we use a `=` as it return the 
                                         // content of the variable.
        nodes.push(node);
    for (node of nodes)
        renameHandler(node);
          
}

window.renameWith = renameWith;
