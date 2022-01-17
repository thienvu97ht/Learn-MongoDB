const mocha = require("mocha");
const assert = require("assert");
const PersonChar = require("../models/personchar");

// Mieu ta qua trinh kiem tra
describe("Tim kiem ban ghi (records)", function () {
  // Saving record
  var character;
  beforeEach(function (done) {
    character = new PersonChar({
      name: "Toan",
    });

    character.save().then(function () {
      assert(character.isNew === false);
      done();
    });
  });

  // Find one
  it("Tim mot ban ghi tu CSDL", function (done) {
    PersonChar.findOne({
      name: "Toan",
    }).then(function (result) {
      assert(result.name === "Toan");
      done();
    });
  });

  // Find one by ID
  it("Tim mot ban ghi bag ID tu CSDL", function (done) {
    PersonChar.findOne({ _id: character.id }).then(function (dataResult) {
      assert(dataResult._id.toString() === character._id.toString());
      done();
    });
  });
});
