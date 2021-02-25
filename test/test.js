const NodeEPOSNow = require("../index");

const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;
const should = chai.should();

const accessToken = ""; // <--- Change to your Access Token.

const eposnow = new NodeEPOSNow(accessToken);

describe("node-eposnow initialize", () => {
  it("should return brands", async () => {
    const response = await eposnow.v4.brand.list();
    expect(response).to.be.an("array");
  });
});
