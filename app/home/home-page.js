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
exports.pageLoaded = function(args){
    page = args.object
    page.bindingContext = pageData
    searchDetail = page.getViewById('searchDetail')
    numberSearch = page.getViewById('numberSearch')
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