let hooks = require("hooks");
let stash = {};
// transctionを見る
hooks.beforeAll(function (transactions) {
  hooks.log(transactions);
});
