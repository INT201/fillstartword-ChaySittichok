const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  //code here
  if((word == null || undefined )){
    return undefined
  }
  else if(word.includes(startWord)){
    return word
  }
  else {
    let arr1
    return arr1 = startWord.concat(word)
  }
  
}
module.exports = fillStartWord
