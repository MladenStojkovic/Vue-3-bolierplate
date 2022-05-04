import service from '@/api/index';

const loginApi = {
  postVerification: (params) => service.get(`/posts`, params),
};

export default loginApi;