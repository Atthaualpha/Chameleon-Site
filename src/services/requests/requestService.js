import axios from "axios";

const searchRequestByProject = (projectId, callback) => {
  axios
    .get("/mock-request/all/" + projectId)
    .then((res) => callback(null, res))
    .catch((err) => callback(err));
};

const searchRequestById = (requestId, callback) => {
  axios
    .get("/mock-request/" + requestId)
    .then((res) => callback(null, res))
    .catch((err) => callback(err));
};

const deleteRequest = (projectId, requestId, callback) => {
  axios
    .delete("/mock-request/" + projectId, { data: [requestId] })
    .then((res) => callback(null, res))
    .catch((err) => callback(err));
};

export default {
  searchRequestByProject,
  searchRequestById,
  deleteRequest,
};
