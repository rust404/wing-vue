const fs = require('fs')
const path = require('path')

function isDev() {
  return process.env.NODE_ENV === 'development';
}

function createFile(filePath, content) {
  return new Promise((resolve, reject) => {
    const dirPath = path.dirname(filePath)
    // create directory recursively
    if (!fs.existsSync(dirPath)) {
      const arr = []
      let tempPath = path.dirname(filePath)
      while (tempPath && !fs.existsSync(tempPath)) {
        const pathArr = tempPath.split(path.sep)
        arr.push(pathArr.pop())
        tempPath = pathArr.join(path.sep)
      }
      while (arr.length !== 0) {
        tempPath += '/' + arr.pop()
        fs.mkdirSync(tempPath)
      }
    }
    fs.writeFile(filePath, content, err => {
      if (err) {
        reject(err)
      }
      resolve()
    })
  })
}
module.exports = {
  isDev,
  createFile
}
