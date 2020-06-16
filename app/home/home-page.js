var Observable = require("data/observable")
var SelectedIndexChangedEventData = require("nativescript-drop-down")

 var pageData = new Observable.fromObject({
    search:"",
    iconSearch: false,
    itemsCat:["หมวดหมู่ทั้งหมด","test2","test3","test4"],
    selectedIndexCat:0,
    itemsObj:["สินค้าทั้งหมด","เหลือมากกว่าหรือเท่ากับ","เหลือน้อยกว่าหรือเท่ากับ"],
    selectedIndexObj:0,
})
let searchDetail = null

exports.pageLoaded = function(args){
    page = args.object
    page.bindingContext = pageData
    searchDetail = page.getViewById('searchDetail')
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
    console.log("search")
    console.log(pageData.search)
}