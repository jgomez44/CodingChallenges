import React from "react";

class PalindromeCheck extends React.Component {
  palindromeCheck = str => {
    let arr = str.split("").join("");
    let reverseStr = str
      .split("")
      .reverse()
      .join("");
    if (arr === reverseStr) {
      return true;
    } else {
      return false;
    }
  };
  render() {
    return (
      <>
        <div>{this.palindromeCheck("anna")}</div>
      </>
    );
  }
}

export default PalindromeCheck;
