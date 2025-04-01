//导出所有的接口请求函数
import base from './base.js'
import req from './req.js'
// 获取分类列表
export const getCategoryList = () => req.get(base.categoryUrl);
