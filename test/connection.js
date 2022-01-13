const mongoose = require("mongoose");

// ES6 Promise
mongoose.Promise = global.Promise;

// Connect to mongodb
before(function (done) {
  mongoose.connect("mongodb://localhost/testdb");

  mongoose.connection
    .once("open", function () {
      console.log("Ket noi da dc thuc hien");
      done();
    })
    .on("error", function (error) {
      console.log("ket noi bi loi", error);
    });
});

// Drop cac personcharecter collection truoc khi kiem tra va them
beforeEach(function (done) {
  // Drop colelction
  mongoose.connection.collections.personchars.drop(function () {
    done();
  });
});
