import React from "react";

class FindLongestWord extends React.Component {
  findLongestWord = str => {
    let arr = str.split(" ");
    let wordLength = [];
    for (let i = 0; i < arr.length; i++) {
      wordLength[i] = arr[i].split("").length;
    }
    console.log(wordLength);
    for (let j = 0; j < wordLength.length; j++) {
      let k = wordLength.indexOf(Math.max(...wordLength));
      return arr[k];
    }
  };
  render() {
    return (
      <div>
        <h3>Longest Word: "This is a sentence"</h3>
        <p>{this.findLongestWord("This is a sentence")}</p>
      </div>
    );
  }
}
export default FindLongestWord;
