export default {
  data() {
    return {
      statusList: [
        { code: 200, name: "Ok" },
        { code: 400, name: "Bad request" },
        { code: 500, name: "Internal Server Error" },
        { code: 404, name: "Not found" },
      ],
    };
  },
};
