import { assert } from "chai";
import request from "supertest";
import app from "./app";

describe("GET /", function () {
  this.timeout(10 * 1000);

  it('should return "hello world"', async function () {
    const response = await request(app).get("/");

    assert.equal(response.status, 200, "response.status");
    assert.include(response.text, "Hello World", "response.text");
  });
});
