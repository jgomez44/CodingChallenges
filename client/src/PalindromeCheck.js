import React from "react";

class PalindromeCheck extends React.Component {
  palindromeCheck = str => {
    let arr = str.split("").join("");
    let reverseStr = str
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
