
const axios = require("axios").default;

const apisService = {
  getIPInfo: () => {
    const endpoint = "/v1/user/get_data_by_ip";
    return axios.get(endpoint, {
      headers: {
        "Content-Type": "application/json",
      }
    });
  },
};

export default apisService;