const zl = require("zip-lib");

zl.extract("/workspace/Zip/alten-shop-back-products.zip", "./unzipped/").then(function () {
    console.log("done");
    }, function (err) {
        console.log(err);
        });
