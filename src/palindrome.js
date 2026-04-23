"use strict";

function palindrom(text) {
  if (typeof text !== "string") return false;

  const normalText = text.toUpperCase().replace(/ /g, "");
  let revercedText = "";

  for (let i = normalText.length - 1; i >= 0; i--) {
    revercedText += normalText[i];
  } 
  return normalText === revercedText;
}
console.log(palindrom("a aaaa"));
console.log(palindrom("poP"));
console.log(palindrom(" "));
console.log(palindrom("avvc"));
console.log(palindrom(2));
console.log(palindrom(undefined));
