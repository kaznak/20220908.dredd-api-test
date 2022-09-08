let hooks = require("hooks");
let stash = {};
// transctionを見る
hooks.afterEach(function (transaction) {
  hooks.log(transaction);
});
