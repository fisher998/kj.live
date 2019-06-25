import fetch from '@/utils/fetch.js'
// 全国
export function A00001() {
  const params = {
    actionCode: 'A00001',
  };
  return fetch({
    url: '',
    method: 'post',
    params
  })
}
// 地方
export function A00002() {
  const params = {
    actionCode: 'A00002',
  };
  return fetch({
    url: '',
    method: 'post',
    params
  })
}
// 高频
export function A00003() {
  const params = {
    actionCode: 'A00003',
  };
  return fetch({
    url: '',
    method: 'post',
    params
  })
}
// 查彩种列表
export function A00004({code}) {
  const params = {
    actionCode: 'A00004',
    code,
  };
  return fetch({
    url: '',
    method: 'post',
    params
  })
}
// 查详情
export function A00005({code, batchno}) {
  const params = {
    actionCode: 'A00005',
    code,
    batchno
  };
  return fetch({
    url: '',
    method: 'post',
    params
  })
}
// 热门资讯
export function A00006() {
  const params = {
    actionCode: 'A00006'
  };
  return fetch({
    url: '',
    method: 'post',
    params
  })
}