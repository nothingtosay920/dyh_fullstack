// // 迎接接口请求吧
// Manufacturer 有多少商家
// MVC  api 向外暴露数据 
// 一切皆资源 
// 增删改查 
// PUT 
// 1. 设计一个URL  RESTFUL
//   /api/v1/manufacturer GET  [{name: '小米'}]
//   /api/v1/manufacturer POST body {}

const express = require('express');
const router = express.Router();
const manufacturerController = require('../../controllers/manufacturer');
// url 访问的路口 MVC 
router.get('/manufacturers', manufacturerController.all);
router.get('/manufacturers/:id', manufacturerController.byId);
router.post('/manufacturers', manufacturerController.create);
router.delete('/manufacturers', manufacturerController.remove)
router.put('/manufacturers/:id', manufacturerController.update)
module.exports = router;