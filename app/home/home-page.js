var Observable = require("data/observable")
const Frame = require("tns-core-modules/ui/frame").Frame;
const application = require("tns-core-modules/application");
const topmostFrame = Frame.topmost();
 var pageData = new Observable.fromObject({
    search:"",
    searchColor:"",
    searchSize:"",
    searchNumber:"",
    iconSearch: false,
    itemsCat:["หมวดหมู่ทั้งหมด","test2","test3","test4"],
    selectedIndexCat:0,
    itemsObj:["สินค้าทั้งหมด","เหลือมากกว่าหรือเท่ากับ","เหลือน้อยกว่าหรือเท่ากับ"],
    selectedIndexObj:0,
    btnInsert:true,
})
let searchDetail = null
let numberSearch = null
let btnInOut = null
let oldArgs = null
let frame = null
exports.pageLoaded = function(args){
    page = args.object
    page.bindingContext = pageData
    searchDetail = page.getViewById('searchDetail')
    numberSearch = page.getViewById('numberSearch')
    btnInOut = page.getViewById('btnInOut')
    frame = page.getViewById('mainFrame')
    frame.canGoBack(false)
    oldArgs = btnInOut
}
exports.searchDetail = function(){
    if(searchDetail.style.visibility == "collapse"){
        searchDetail.style.visibility = "visible"
        pageData.iconSearch = true
    } else {
        searchDetail.style.visibility = "collapse"
        pageData.iconSearch = false
    }  
}
exports.searchSubmit = function(args){
    console.log(pageData.search)
}
exports.dropDownSelectedIndexChangedObj = function(args){
    if(args.newIndex > 0){
        numberSearch.style.visibility = "visible"
    } else {
        numberSearch.style.visibility = "collapse"
        pageData.searchNumber = ""
    }
}

exports.resetBtn = function() {
    pageData.selectedIndexCat = 0;
    pageData.selectedIndexObj = 0;
    pageData.searchColor = "";
    pageData.searchSize = "";
    pageData.searchNumber = "";
    numberSearch.style.visibility = "collapse"
    pageData.search = "";
}

function btnActive(argsObj){
    if(oldArgs)
         oldArgs.className = "bg-main-btn"
    oldArgs = argsObj
    argsObj.className = "bg-main-btn main-btn-active"
}
exports.inOut = function(args) {
    btnActive(args.object)
    const navigationEntry = {
        moduleName: "show/show",
    };
    frame.navigate(navigationEntry);
    pageData.btnInsert = true

}
exports.listOut = function(args) {
    btnActive(args.object)
    pageData.btnInsert = false
}
exports.report = function(args) {
    btnActive(args.object)
    pageData.btnInsert = false
}
exports.setting = function(args) {
    btnActive(args.object)
    pageData.btnInsert = false
}

exports.insertItem = function() {
    const navigationEntry = {
        moduleName: "insert/insert-page",
    };
    frame.navigate(navigationEntry);
    pageData.btnInsert = false
}
application.android.on(application.AndroidApplication.activityBackPressedEvent, (args) => {
    searchDetail.style.visibility = "collapse"
    pageData.iconSearch = false
    oldArgs.className = "bg-main-btn"
    btnInOut.className = "bg-main-btn main-btn-active"
    const navigationEntry = {
        moduleName: "show/show",
        clearHistory: true,
        // backstackVisible :false,
    };
    frame.navigate(navigationEntry);
    pageData.btnInsert = true
});
