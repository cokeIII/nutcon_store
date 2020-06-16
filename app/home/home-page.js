var Observable = require("data/observable")
var SelectedIndexChangedEventData = require("nativescript-drop-down")

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
})
let searchDetail = null
let numberSearch = null
let btnInOut = null
let oldArgs = null
exports.pageLoaded = function(args){
    page = args.object
    page.bindingContext = pageData
    searchDetail = page.getViewById('searchDetail')
    numberSearch = page.getViewById('numberSearch')
    btnInOut = page.getViewById('btnInOut')
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
}
exports.listOut = function(args) {
    btnActive(args.object)
}
exports.report = function(args) {
    btnActive(args.object)
}
exports.setting = function(args) {
    btnActive(args.object)
}
