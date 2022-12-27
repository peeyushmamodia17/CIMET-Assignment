const axios = require("axios");
const post = async (path, data={}, token) => {
  const res = await axios.post(path, data, {
    headers: {
      "api-key": process.env.APIKEY,
      "auth-token": token
    },
  });
  return res;
};

module.exports = {
  post
};
