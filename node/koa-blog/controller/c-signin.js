exports.postSign = async ctx => {
  await ctx.render('signin', {
    session: ctx.session  // 模板生效
  })
}
