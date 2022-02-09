// ==UserScript==
// @name        Do not deadname me [omnivox]
// @namespace   github.com/PissMan420/do-not-deadname-me
// @match       http*://*.omnivox.ca/*
// @grant       none
// @version     1.0
// @author      Aurélie Champoux
// @description Do not deadname me pour omnivox
// ==/UserScript==

const name = ['Aurélie','Champoux']; 
const deadname = ['Vincent', 'Levasseur'];

const sender = document.getElementById('tdACont');

if (sender)
  sender.innerHTML = sender.innerHTML.replace(deadname.join(' '), name.join(' '));