// 加载https模块，只要有获取网站链接的操作，都需要
const https = require('https')
// 加载cheerio
const cheerio = require('cheerio')
const fs = require('fs')
https.get('https://movie.douban.com/top250', (res) =>{
    let html = ''
    res.on('data', (chunk)=>{
        // console.log(html)
        html += chunk 
    })
    res.on('end', () => {
        // console.log(html)    
        const $ = cheerio.load(html)
        let allFilms = []

        $('li .item'.each(() => {
            const title = $('.titile', this).text()
            allFilms.push({title})
        })

        fs.watchFile('./files.json', JSON.stringify(allFilms) ,(err) => {
            if(!err) {
                console.log('文字写入完成')
            }
        })
    })
} )