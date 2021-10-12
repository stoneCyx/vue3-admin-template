import request from '../utils/request';

export function login(data:any){
  return request({
    url: "/api/v1/login",
    method: "post",
    data
  });
}