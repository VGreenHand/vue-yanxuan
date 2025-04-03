const express = require('express');
//引入轮播图数据
const bannerData = require('../data/banner.json');
const router = express.Router();
// 测试接口
router.get('/test', (req, res) => {
    res.send('测试成功');
})
// 首页轮播图
router.get('/home/banner', (req, res) => {
    res.send(bannerData)
})
module.exports = router;