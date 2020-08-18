import axios from "axios";

const findProjectReport = (callback) => {
  axios
    .get("/reports/requestByProject")
    .then((res) => callback(null, res.response))
    .catch((err) => callback(err));
};

export default {
  findProjectReport
};
