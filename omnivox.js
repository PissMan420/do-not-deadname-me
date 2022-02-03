// ==UserScript==
// @name  do not dead name me
// @description do not get deadnamed on omnivox
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
    document.querySelectorAll('*').forEach( (e)  => {
        const {innerHTML} = e;
        if (innerHTML.search(deadname.join(' ')) !== -1)
            e.innerHTML = innerHTML.replace(name.join(' '));
        else if (innerHTML.search(deadname[0]) !== -1)
            e.innerHTML = innerHTML.replace(deadname[0], name[0]); 
        else if (innerHTML.search(deadname[1]) !== -1)
            e.innerHTML = innerHTML.replace(deadname[1], name[1]);
    });
});
