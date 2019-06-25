import axios from 'axios';
import { paramsFormat } from '@/tools/format.js';
import qs from 'qs';

const baseURL = 'http://api.kaijiang.com/App.php';

var fetch = axios.create({
  baseURL: baseURL,
  timeout: 60000,
  // headers: {
  //   "Content-Type":"application/json; charset=utf-8",
  //   "Access-Control-Allow-Origin": "*",
  //   "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
  //   "Access-Control-Allow-Methods": "GET, POST, PUT"
  // }
});
// 添加一个请求拦截器
fetch.interceptors.request.use(function (config) {
  // Do something before request is sent
  // if (config.method === 'get') config.url= config.url + '?_' + new Date().getTime();
  config.params.time = new Date().getTime();

  // 为所有接口添加 sign 当 config.params 的值没有时不处理
  if (!!config.params) {
    // console.log(config)
    config.params.sign = paramsFormat(config.params);
    config.data = qs.stringify(config.params)
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// 添加一个响应拦截器
fetch.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

// 导出fetch模块
export default fetch;
