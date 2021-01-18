const fs = require('fs')
const path = require('path')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const babel = require('@babel/core')

const getModuleInfo = (file) => {
  const body = fs.readFileSync(file, 'utf-8')
  const ast = parser.parse(body, {
    sourceType: 'module' // 表示我们要解析的是ES模块
  })

  // 依赖收集
  const deps = {}
  traverse(ast, {
    ImportDeclaration({ node }) {
      const dirname = path.dirname(file) // index.js绝对路径
      const adspath = './' + path.join(dirname, node.source.value)
      deps[node.source.value] = adspath
    }
  })

  // es6 -> es5 转换AST语法树
  const { code } = babel.transformFromAst(ast, null, {
    presets: ['@babel/preset-env']
  })

  const moduleInfo = {file, deps, code}
  return moduleInfo
}

// 递归所有的模块
const parseModules = (file) => {
  const entry = getModuleInfo(file)
  const temp = [entry]
  const depsGraph = {}

  for (let i = 0; i < temp.length; i++) {
    const deps = temp[i].deps
    if (deps) {
      for (const key in deps) {
        if (deps.hasOwnProperty(key)) {
          temp.push(getModuleInfo(deps[key])) // 递归
        }
      }
    }
  }
  // 格式化数据
  temp.forEach(moduleInfo => {
    depsGraph[moduleInfo.file] = {
      code: moduleInfo.code,
      deps: moduleInfo.deps
    }
  })

  console.log(depsGraph);  // '路径': { code, deps }
  return depsGraph
}


// 处理require exports 
const bundle = (file) => {
  const depsGraph = JSON.stringify(parseModules(file))
  return `(function(graph) {
    function require(file) {
      function absRequire(relPatrh) {
        return require(graph[file].deps[relPatrh])
      }

      var exports = {};

      (function(require, exports, code) {
        eval(code)
      })(absRequire, exports,  graph[file].code) // abs执行了 省略了()

      return exports
    }
    require('${file}')
  })(${depsGraph})`
}

const content = bundle('./src/index.js')
console.log(content);

fs.mkdirSync('./dist')
fs.writeFileSync('./dist/app.js', content)