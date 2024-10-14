function isPalindrome(str) {
  if (typeof str !== "string" && typeof str !== "number") {
    return null;
  }

  if(typeof str === "number"){
    str = str.toString();
  }

  //A man, a plan, a canal, Panama
  const cleanedString = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  //amanaplanacanalpanama
  return cleanedString === cleanedString.split("").reverse().join("");
}

module.exports = {
  isPalindrome
};
