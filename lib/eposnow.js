const _ = require("lodash");
const btoa = require("btoa");
const superagent = require("superagent");

const constants = require("./constants");
const api = require("./api");

class NodeEposNow {
  constructor(accessToken = null) {
    if (accessToken) {
      this.accessToken = accessToken;
      this._buildFunctions();
    }
  }

  authenticate(api_key, api_secret) {
    this.accessToken = btoa(`${api_key}:${api_secret}`);
    this.__buildFunctions();
  }

  setAccessToken(accessToken) {
    this.accessToken = accessToken;
    this.__buildFunctions();
  }

  _buildFunctions() {
    _.forEach(api, v => {
      let path = `${v.version}`;
      this[v.version] = this[v.version] ? this[v.version] : {};
      _.forEach(v.endpoints, endpoint => {
        let functionName = ``;
        let functionNameArr = endpoint.name.split("/");
        if (functionNameArr && functionNameArr.length === 2) {
          functionName +=
            functionNameArr[0].toLowerCase() + functionNameArr[1].toLowerCase();
        } else {
          functionName += functionNameArr[0].toLowerCase();
        }
        this[v.version][functionName] = this[v.version][functionName] || {};
        _.forEach(endpoint.availables, method => {
          let func = `${
            v.version
          }.${functionName}.${method}`;
          if (method === "list") func += "()";
          if (method === "get") func += "(Id)";
          if (method === "create" || method === "update" || method === "delete" ) func += "(body)";
          this[v.version][functionName][method] = (params = null) => {
            return this[`_${method}FunctionBuilder`](
              `${path}/${endpoint.name}`,
              params
            );
          };
        });
      });
    });
  }

  _listFunctionBuilder(path, params = null) {
    return new Promise(async (resolve, reject) => {
      try {
        let url = `${constants.BASE_URL}/${path}`;
        if (params && _.size(params) > 0) {
          url += `?`;
          _.forEach(params, (val, key) => (url += `${key}=${val}`));
        }
        const res = await superagent
          .get(url)
          .set("Authorization", `Basic ${this.accessToken}`)
          .set("Content-Type", "application/json");
        if (res && res.ok) {
          resolve(res.body);
        } else if (res && !res.ok) {
          reject(res.error);
        } else {
          throw new Error("Unknown error");
        }
      } catch (error) {
        throw error;
      }
    });
  }

  _getFunctionBuilder(path, id = null) {
    return new Promise(async (resolve, reject) => {
      try {
        let url = `${constants.BASE_URL}/${path}`;
        if (id) {
          url += `/${id}`;
        }
        const res = await superagent
          .get(url)
          .set("Authorization", `Basic ${this.accessToken}`)
          .set("Content-Type", "application/json");
        if (res && res.ok) {
          resolve(res.body);
        } else if (res && !res.ok) {
          reject(res.error);
        } else {
          throw new Error("Unknown error");
        }
      } catch (error) {
        throw error;
      }
    });
  }

  _createFunctionBuilder(path, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        let url = `${constants.BASE_URL}/${path}`;
        if (!payload) reject(new Error("'Request Body' must be provided!"));
        const res = await superagent
          .post(url)
          .set("Authorization", `Basic ${this.accessToken}`)
          .set("Content-Type", "application/json")
          .send(payload);
        if (res && res.ok) {
          resolve(res.body);
        } else if (res && !res.ok) {
          reject(res.error);
        } else {
          throw new Error("Unknown error");
        }
      } catch (error) {
        throw error;
      }
    });
  }

  _updateFunctionBuilder(path, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        let url = `${constants.BASE_URL}/${path}`;
        if (!payload) reject(new Error("'Request Body' must be provided!"));
        const res = await superagent
          .put(url)
          .set("Authorization", `Basic ${this.accessToken}`)
          .set("Content-Type", "application/json")
          .send(payload);
        if (res && res.ok) {
          resolve(res.body);
        } else if (res && !res.ok) {
          reject(res.error);
        } else {
          throw new Error("Unknown error");
        }
      } catch (error) {
        throw error;
      }
    });
  }

  _deleteFunctionBuilder(path, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        let url = `${constants.BASE_URL}/${path}`;
        if (!payload) reject(new Error("'Request Body' must be provided!"));
        const res = await superagent
          .delete(url)
          .set("Authorization", `Basic ${this.accessToken}`)
          .set("Content-Type", "application/json")
          .send(payload);
        if (res && res.ok) {
          resolve();
        } else if (res && !res.ok) {
          reject(res.error);
        } else {
          throw new Error("Unknown error");
        }
      } catch (error) {
        throw error;
      }
    });
  }
}

module.exports = NodeEposNow;
