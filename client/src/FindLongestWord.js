import React from "react";

class FindLongestWord extends React.Component {
  findLongestWord = str => {
    let arr = str.split(" ");
    let wordLength = [];
    for (let i = 0; i < arr.length; i++) {
      wordLength[i] = arr[i].split("").length;
    }
    console.log(wordLength);
    for(let j=0; j<wordLength.length; j++){
      
    }
  };
  render() {
    return <div>{this.findLongestWord("This is a sentence")}</div>;
  }
}
export default FindLongestWord;
