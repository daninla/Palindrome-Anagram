"use strict";

function isAnagram(str1, str2) {
  if (typeof str1 !== "string" || typeof str2 !== "string") return false;

  str1 = str1.toLowerCase().replace(/ /g, "");
  str2 = str2.toLowerCase().replace(/ /g, "");

  if (str1.length !== str2.length) return false;

  const charCount = {};

  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    const char = str2[i];

    if (!charCount[char]) return false;
    charCount[char]--;
  }
  return true;
}


console.log(isAnagram('topot', 'pttoo'));
console.log(isAnagram('suub', 'bsuu'));
console.log(isAnagram('ff hr', 'fff hr'));
console.log(isAnagram(' ', ''));
