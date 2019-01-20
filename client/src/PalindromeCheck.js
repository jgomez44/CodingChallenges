import React from "react";

class PalindromeCheck extends React.Component {
  //   Coding Challenge instructions:
  //Return true if the given string is a palindrome.Otherwise, return false.
  // A palindrome is a word or sentence that’s spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
  //   Make sure to remove all non - alphanumeric characters(punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

  // palindrome(“race car”) should return true
  // palindrome(“not a palindrome”) should return false
  // palindrome(“A man, a plan, a canal.Panama”) should return true
  palindromeCheck = str => {
    var reg = /[\W_]/g;

    var lowerCase = str.toLowerCase().replace(reg, "");
    let arr = lowerCase.split("").join("");
    let reverseStr = lowerCase
      .split("")
      .reverse()
      .join("");
    return arr === reverseStr ? "true" : "false";
  };
  render() {
    return (
      <>
        <h3>Palindrome Check: "Anna"</h3>
        <div>{this.palindromeCheck("anna")}</div>
      </>
    );
  }
}

export default PalindromeCheck;
