const state = () => ({
  request: {
    name: "",
    method: "GET",
    url: "",
    queryParams: [],
    exactQuery: false,
    headers: [],
    exactHeaders: false,
    body: "",
    responseHeaders: [],
    responseBody: [],
    status: 200,
  },
  queryBodyParams: "",
  headersBodyParams: "",
  responseHeaderBodyParams: "",
});

const mutations = {
  setName(state, name) {
    state.request.name = name;
  },
  setMethod(state, method) {
    state.request.method = method;
  },
  setUrl(state, url) {
    state.request.url = url;
  },
  setStatus(state, status) {
    state.request.status = status;
  },
  setExactMatch(state,{ tabName, checked}){
    if(tabName === 'Query'){
      state.request.exactQuery = checked
    }else{
      state.request.exactHeaders = checked
    }
  },
  setParameters(state, { tabName, sectionType, parameters }) {
    saveParamList(state, tabName, sectionType, parameters);
    if (tabName == "Query") {
      buildUrl(state);
    }
  },
  setBodyParams(state, { tabName, sectionType, bodyParam }) {
    saveBodyParam(state, tabName, sectionType, bodyParam);
  },
  setBody(state, { sectionType, body }) {
    if (sectionType == "request") {
      state.request.body = body;
    } else {
      state.request.responseBody = body;
    }
  },
  buildBodyParams(state, { tabName, sectionType }) {
    saveBodyParam(
      state,
      tabName,
      sectionType,
      buildBody(state, tabName, sectionType)
    );
  },
  buildParamListFromUrl(state, sectionType) {
    let paramList = [];
    if (state.request.url.length > 0) {
      const queryIndex = state.request.url.indexOf("?");
      if (queryIndex != -1) {
        const queries = state.request.url.substring(queryIndex + 1);
        if (queries.length > 0) {
          const queryItem = queries.split("&");
          queryItem.forEach((query) => {
            const paramAttr = query.split("=");
            let param = {
              key: paramAttr[0],
              value: paramAttr[1] || "",
            };
            paramList.push(param);
          });
        }
      }
    }
    saveParamList(state, "Query", sectionType, paramList);
    saveBodyParam(
      state,
      "Query",
      sectionType,
      buildBody(state, "Query", sectionType)
    );
  },
  clearRequest(state) {
    const newRequest = {
      name: "",
      method: "GET",
      url: "",
      queryParams: [],
      exactQuery: false,
      headers: [],
      exactHeaders: false,
      body: "",
      responseHeaders: [],
      responseBody: [],
      status: 200,
    };
    state.request = newRequest;
  },
  setRequest(state, request) {
    state.request = request;
  },
};

const getters = {
  request(state) {
    return state.request;
  },
  url(state) {
    return state.request.url;
  },
  name(state) {
    return state.request.name;
  },
  method(state) {
    return state.request.method;
  },
  status(state) {
    return state.request.status;
  },
  exactMatch(state){
    return (tabName) => {
      if (tabName === "Query") {
        return state.request.exactQuery;
      } else {
        return state.request.exactHeaders;
      }
    }    
  },
  bodyParams(state) {
    return (tabName, section) => {
      if (tabName == "Query") {
        return state.queryBodyParams;
      } else {
        if (section == "request") {
          return state.headersBodyParams;
        } else {
          return state.responseHeaderBodyParams;
        }
      }
    };
  },
  body(state) {
    return (section) => {
      if (section == "request") {
        return state.request.body;
      } else {
        return state.request.responseBody;
      }
    };
  },
  requestData(state) {
    return (tabName, section) => {
      let data;
      if (tabName == "Query") {
        data = state.request.queryParams || [];
      } else if (tabName == "Headers") {
        if (section == "request") {
          data = state.request.headers || [];
        } else {
          data = state.request.responseHeaders || [];
        }
      }

      return data;
    };
  },
};

function buildUrl(state) {
  let queryUrl = "";

  state.request.queryParams.forEach((query) => {
    if (queryUrl.length > 0) {
      queryUrl += "&";
    }
    queryUrl += query.key + "=" + query.value;
  });

  if (state.request.url.length > 0) {
    let queries = state.request.url.split("?");
    if (queryUrl.length > 0) {
      state.request.url = queries[0] + "?" + queryUrl;
    } else {
      state.request.url = queries[0];
    }
  } else if (queryUrl.length > 0) {
    state.request.url = "?" + queryUrl;
  }
}

function buildBody(state, tabName, section) {
  let body = "";
  let paramList = getters.requestData(state)(tabName, section);

  paramList.forEach((param) => {
    if (body.length > 0) {
      body += "\n";
    }
    body += param.key + ":" + param.value;
  });

  return body;
}

function saveParamList(state, tabName, section, parameters) {
  if (tabName == "Query") {
    state.request.queryParams = parameters;
  } else if (tabName == "Headers") {
    if (section == "request") {
      state.request.headers = parameters;
    } else {
      state.request.responseHeaders = parameters;
    }
  }
}

function saveBodyParam(state, tabName, section, body) {
  if (tabName == "Query") {
    state.queryBodyParams = body;
  } else {
    if (section == "request") {
      state.headersBodyParams = body;
    } else {
      state.responseHeaderBodyParams = body;
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
};
