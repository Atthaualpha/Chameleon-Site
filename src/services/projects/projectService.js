import axios from "axios";

const createProject = (project, callback) => {
  axios
    .post("/project", project)
    .then((res) => {
      callback(null, res.completed);
    })
    .catch((err) => {
      console.log(err);
      callback(err);
    });
};

const searchProjects = (queryParams, callback) => {
  axios
    .get("/project", { params: queryParams })
    .then((res) => {
      if (res.completed) {
        callback(null, res.response);
        return;
      }
      callback(res);
    })
    .catch((err) => {
      callback(err);
    });
};

const updateProject = (project, callback) => {
  axios
    .put("/project/" + project._id, {
      name: project.name,
    })
    .then((res) => {
      callback(null, res.completed);
    })
    .catch((err) => {
      callback(err);
    });
};

const deleteProject = (projectId, callback) => {
  axios
    .delete("/project/" + projectId)
    .then((res) => {
      callback(null, res.completed);
    })
    .catch((err) => {
      callback(err);
    });
};

export default {
  createProject,
  searchProjects,
  updateProject,
  deleteProject,
};
