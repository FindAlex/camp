const router = require('koa-router')();
const githubPlus = require('../controller/github-plus')
router.prefix('/api');

/*保存perfData接口*/
router.get('/githubPlus/list',githubPlus.getList);

module.exports = router
