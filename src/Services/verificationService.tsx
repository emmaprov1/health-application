
import axios from "axios"

axios.defaults.baseURL = 'https://policerecruitment.gov.ng';

axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  // config.headers.post['Content-Type'] = 'application/json;charset=utf-8';
  // config.headers.post['Access-Control-Allow-Methods'] = "GET,PUT,POST,DELETE,PATCH,OPTIONS";
  config.headers.post['Access-Control-Allow-Origin'] = "*";
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

const verificationService = {

  verifyNin: async (nin:number) => {
    // 56221327274
    return await axios.get(`/verify.php?pickNIN=${nin}&key=ZebraW3ta$`)
  }
}

export default verificationService
