const { reject } = require('lodash')
const { resolve } = require('path')
const puppeteer = require('puppeteer')
async function run() {
    const brower = await puppeteer.launch()
    const page = await brower.newPage()
    await page.goto('https://juejin.cn/books', {
        waitUntil: 'load'
    })

    await page.screenshot({
        path: './jujin.png'
    })
    // 在获取html之前 执行几次 下拉动作
    page.evaluate(function name() {
        function req() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    document.querySelector('.copy-right').scrollIntoView()
                    resolve()
                }, 2000)
            })
        }
        async function run() {
            for (let i = 0; i < 3; i++) {
                await req()
            }
        }
        return run()
    })





    const html = await page.content()
    const books = $('.info', html)
    let booksInfo = []
    books.each(function () {
        const book = $(this)
        let name = $(book.find('.title')).text().trim()
        let auth = $(book.find('author-name')).text().trim()
        booksInfo.push({
            name,auth
        })
    })
    const fs = require('fs')
    fs.writeFile('./books.json', JSON.stringify(booksInfo, null, 2), err => {
        if (!err) {
            console.log('写入成功');
        }
    })
    await brower.close()
}
run()