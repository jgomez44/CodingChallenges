import React from "react";

class FindLongestWord extends React.Component {
  findLongestWord = str => {
    let arr = str.split(" ");
    let wordLength = [];
    for (let i = 0; i < arr.length; i++) {
      wordLength += arr[i].split("").length;
    }
  };
  render() {
    return;
  }
}
export default FindLongestWord;
