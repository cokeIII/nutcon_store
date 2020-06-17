var Observable = require("data/observable")

 var pageData = new Observable.fromObject({
    listData:[{catName:"test1",price:"150"},{catName:"test2",price:"150"},{catName:"test3",price:"150"},{catName:"test4",price:"150"}]
})
let frame = null
exports.pageLoaded = function(args){
    page = args.object
    page.bindingContext = pageData
}
exports.itemSelect = function(){
    console.log("TAP")
}
