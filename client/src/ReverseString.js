import React from "react";

class ReverseString extends React.Component {
  reverseString(str) {
    return str
      .split("")
      .reverse()
      .join("");
  }

  reverseStringLoop(str) {
    let reverseStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reverseStr += str[i];
    }
    return reverseStr;
  }
  render() {
    return (
      <>
        <h3>Reverse String:</h3>
        <div>
          <h4>Split, Reverse, Join Ex:</h4>
          <p>Apple: {this.reverseString("apple")}</p>
          <br />
          <h4>Loop Ex:</h4>
          <p>Orange: {this.reverseStringLoop("orange")}</p>
        </div>
      </>
    );
  }
}
export default ReverseString;
