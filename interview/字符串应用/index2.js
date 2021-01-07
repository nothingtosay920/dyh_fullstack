// void addWord(word)
// bool search(word) . a - z

// 设计一个支持以下两种操作的 数据结构

const WordDictionary = function () {
  this.words = {} // map 角色
}

WordDictionary.prototype.addWord = function (word) {
  // word相同长度的数组已经存在 只添加
  if (this.words[word.length]) {
    this.words[word.length].push(word)    
  } else {
    this.words[word.length] = [word]
  }
}


WordDictionary.prototype.search = function (word) {
  if (!this.words[word.length]) {
    return false
  } 
  const len = word.length
  if (word.includes('.')) {
    return this.words[len].includes(word)
  }
  const reg = new RegExp(word)
  this.words[len].some((item) => {
    return reg.test(item)
  })
}

let test = new WordDictionary()