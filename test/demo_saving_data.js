const mocha = require("mocha");
const assert = require("assert");
const PersonChar = require("../models/personchar");

// Mieu ta qua trinh kiem tra
describe("Mieu ta them du lieu", function () {
  it("Them mot ban ghi vao CSDL", function (done) {
    var charater = new PersonChar({
      name: "Sky Alvert",
    });

    charater.save().then(function () {
      assert(charater.isNew === false);
      done();
    });
  });
});
