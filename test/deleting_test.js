const mocha = require("mocha");
const assert = require("assert");
const PersonChar = require("../models/personchar");

// Mieu ta qua trinh kiem tra
describe("Xoa ban ghi (records)", function () {
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

  it("Xoa mot ban ghi tu CSDL", function (done) {
    PersonChar.findOneAndRemove({ name: "Toan" }).then(function () {
      PersonChar.findOne({ name: "Toan" }).then(function (result) {
        assert(result === null);
        done();
      });
    });
  });
});
