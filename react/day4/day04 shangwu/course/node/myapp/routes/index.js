var express = require('express');
var router = express.Router();
var Mock = require('mockjs');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/list', function(req, res, next) {
	var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|5': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        "average|1-10": "★",
        "img":Mock.Random.image('200x100', '#894FC4', '#FFF', 'png', '!')
    }]
	})
  res.send(data);
});
router.get('/banner', function(req, res, next) {
	var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|3': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        "img":Mock.Random.image('200x100', '#894FC4', '#FFF', 'png', '!')
    }]
	})
  res.send(data);
});
module.exports = router;
