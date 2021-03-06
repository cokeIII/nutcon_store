const labelModule = require("tns-core-modules/ui/label")
const StackLayout = require("tns-core-modules/ui/layouts/stack-layout").StackLayout
const TextField = require("tns-core-modules/ui/text-field").TextField
var imageModule = require("tns-core-modules/ui/image")
var camera = require("nativescript-camera")
var Observable = require("data/observable")
var Toast = require("nativescript-toast")
var bghttp = require("nativescript-background-http")

var pageData = new Observable.fromObject({
    dataInsert:[],
    camera: false,
    name:"",
    // id:"",
    cat:"",
    catId:"",
    des:"",
    pic:"",
    categoryList:[],
})
var namePic = ""
let bgInsert = null
let indexInsert = 0
let picPro = null
let category = null
let API_URL = "http://192.168.10.107:7777"

exports.pageLoaded = function(args) {
    camera.requestPermissions()
    page = args.object
    page.bindingContext = pageData
    bgInsert = page.getViewById('bgInsert')
    picPro = page.getViewById('picPro')
    category = page.getViewById('category')
    indexInsert = 0
    pageData.camera = false
}
let minusAc = function(args) { 
    let id = args.object.id
    dlgInsertId = "dlgInsert-"+args.object.id
    let dlgInsert = page.getViewById(dlgInsertId)
    if(id > 0)
        bgInsert.removeChild(dlgInsert)
}
let copyAc = function(args) {
    let id = args.object.id
    let txtColor = page.getViewById("txtColor-"+id)
    let txtSize = page.getViewById("txtSize-"+id)
    let txtPrice = page.getViewById("txtPrice-"+id)
    let txtNum = page.getViewById("txtNum-"+id)

    let txtData = {}

    txtData.txtColor = txtColor.text
    txtData.txtSize = txtSize.text
    txtData.txtPrice = txtPrice.text
    txtData.txtNum = txtNum.text

    createCopy(txtData)
}
function createCopy(txtData) {
    indexInsert++
    let barColor = new StackLayout()
    let barSize = new StackLayout()
    let barPrice = new StackLayout()
    let barNum = new StackLayout()
    let barBtn = new StackLayout()

    let stackBg = new StackLayout()
    stackBg.id = "dlgInsert-"+indexInsert

    let txtColor = new TextField()
    let txtSize = new TextField()
    let txtPrice = new TextField()
    let txtNum = new TextField()
    txtColor.id = "txtColor-"+indexInsert
    txtSize.id = "txtSize-"+indexInsert
    txtPrice.id = "txtPrice-"+indexInsert
    txtNum.id = "txtNum-"+indexInsert

    txtColor.text = txtData.txtColor
    txtSize.text = txtData.txtSize
    txtPrice.text = txtData.txtPrice
    txtNum.text = txtData.txtNum

    let color = new labelModule.Label()
    let size = new labelModule.Label()
    let price = new labelModule.Label()
    let num = new labelModule.Label()
    let plus = new labelModule.Label()
    let copy = new labelModule.Label()
    let minus = new labelModule.Label()
    
    barColor.className = "bar-insert-detail"
    barColor.orientation = "horizontal"

    barSize.className = "bar-insert-detail"
    barSize.orientation = "horizontal"
    
    barPrice.className = "bar-insert-detail"
    barPrice.orientation = "horizontal"
    
    barNum.className = "bar-insert-detail"
    barNum.orientation = "horizontal"

    barBtn.orientation = "horizontal"

    color.className = "fas icon-insert-detail"
    txtColor.className = "txt-insert-detail"
    txtColor.hint = "สี"
    color.text = "\uF53F"

    size.className = "fas icon-insert-detail"
    txtSize.className = "txt-insert-detail"
    txtSize.hint = "ขนาด"
    size.text = "\uF337"

    price.className = "fas icon-insert-detail"
    txtPrice.className = "txt-insert-detail"
    txtPrice.hint = "ราคา"
    price.text = "\uF53A"

    num.className = "fas icon-insert-detail"
    txtNum.className = "txt-insert-detail"
    txtNum.hint = "จำนวน"
    num.text = "\uF187"

    copy.className = "fas copy-icon"
    plus.className = "fas plus-icon"
    minus.className = "fas minus-icon"
    minus.id = indexInsert
    copy.id = indexInsert

    copy.text = "\uF0C5"
    plus.text = "\uF067"
    minus.text = "\uF2ED"

    barColor.addChild(color)
    barColor.addChild(txtColor)

    barSize.addChild(size)
    barSize.addChild(txtSize)

    barPrice.addChild(price)
    barPrice.addChild(txtPrice)

    barNum.addChild(num)
    barNum.addChild(txtNum)

    barBtn.addChild(minus)
    barBtn.addChild(copy)
    barBtn.addChild(plus)

    stackBg.addChild(barColor)
    stackBg.addChild(barSize)
    stackBg.addChild(barPrice)
    stackBg.addChild(barNum)
    stackBg.addChild(barBtn)
    stackBg.className = "bg-insert-obj"
    bgInsert.addChild(stackBg)
    plus.addEventListener("tap", createPlus, this);
    minus.addEventListener("tap", minusAc, this);
    copy.addEventListener("tap", copyAc, this);
}

let createPlus = function createPlus() {
    indexInsert++
    let barColor = new StackLayout()
    let barSize = new StackLayout()
    let barPrice = new StackLayout()
    let barNum = new StackLayout()
    let barBtn = new StackLayout()

    let stackBg = new StackLayout()
    stackBg.id = "dlgInsert-"+indexInsert

    let txtColor = new TextField()
    let txtSize = new TextField()
    let txtPrice = new TextField()
    let txtNum = new TextField()
    txtColor.id = "txtColor-"+indexInsert
    txtSize.id = "txtSize-"+indexInsert
    txtPrice.id = "txtPrice-"+indexInsert
    txtNum.id = "txtNum-"+indexInsert
    
    let color = new labelModule.Label()
    let size = new labelModule.Label()
    let price = new labelModule.Label()
    let num = new labelModule.Label()
    let plus = new labelModule.Label()
    let copy = new labelModule.Label()
    let minus = new labelModule.Label()
    
    barColor.className = "bar-insert-detail"
    barColor.orientation = "horizontal"

    barSize.className = "bar-insert-detail"
    barSize.orientation = "horizontal"
    
    barPrice.className = "bar-insert-detail"
    barPrice.orientation = "horizontal"
    
    barNum.className = "bar-insert-detail"
    barNum.orientation = "horizontal"

    barBtn.orientation = "horizontal"

    color.className = "fas icon-insert-detail"
    txtColor.className = "txt-insert-detail"
    txtColor.hint = "สี"
    color.text = "\uF53F"

    size.className = "fas icon-insert-detail"
    txtSize.className = "txt-insert-detail"
    txtSize.hint = "ขนาด"
    size.text = "\uF337"

    price.className = "fas icon-insert-detail"
    txtPrice.className = "txt-insert-detail"
    txtPrice.hint = "ราคา"
    price.text = "\uF53A"

    num.className = "fas icon-insert-detail"
    txtNum.className = "txt-insert-detail"
    txtNum.hint = "จำนวน"
    num.text = "\uF187"

    copy.className = "fas copy-icon"
    plus.className = "fas plus-icon"
    minus.className = "fas minus-icon"
    minus.id = indexInsert
    copy.id = indexInsert

    copy.text = "\uF0C5"
    plus.text = "\uF067"
    minus.text = "\uF2ED"

    barColor.addChild(color)
    barColor.addChild(txtColor)

    barSize.addChild(size)
    barSize.addChild(txtSize)

    barPrice.addChild(price)
    barPrice.addChild(txtPrice)

    barNum.addChild(num)
    barNum.addChild(txtNum)

    barBtn.addChild(minus)
    barBtn.addChild(copy)
    barBtn.addChild(plus)

    stackBg.addChild(barColor)
    stackBg.addChild(barSize)
    stackBg.addChild(barPrice)
    stackBg.addChild(barNum)
    stackBg.addChild(barBtn)
    stackBg.className = "bg-insert-obj"
    bgInsert.addChild(stackBg)
    plus.addEventListener("tap", createPlus, this);
    minus.addEventListener("tap", minusAc, this);
    copy.addEventListener("tap", copyAc, this);

}

exports.plus = function() {
    createPlus()
}
exports.minus = minusAc
exports.copy = copyAc

exports.takeCamera = function() {
    camera.takePicture()   
    .then(function (imageAsset) {
        console.log("Result is an image asset instance")
        var image = new imageModule.Image()
        image.src = imageAsset
        pageData.camera = true
        picPro.backgroundImage = image.src._android
        pageData.pic = image.src._android

    }).catch(function (err) {
        console.log("Error -> " + err.message)
    });
}

exports.categoryList = function() {
    fetch(API_URL+"/getCat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({})
    }).then((r) => r.json())
    .then((response) => {
        const result = response.catList
        pageData.categoryList = result
        category.style.visibility = "visible"
    }).catch((e) => {
        console.log(e)
    });
}
exports.noop = function() {

}
exports.hideDialog = function() {
    category.style.visibility = "collapse"
}

exports.categoryTap = function(args) {
    if(pageData.categoryList.length != 0){
        pageData.cat = pageData.categoryList[args.index].cat_name
        pageData.catId = pageData.categoryList[args.index].cat_id
        category.style.visibility = "collapse"
    }
}
function sendInsert() {
    let data = {}
    let proDetail = []
    var toast = null
    if(pageData.name =="" && pageData.catId ==""){
        toast = Toast.makeText("กรุณาใส่ชื่อ และ หมวดหมู่","long")
        toast.show()
        return false
    }
    data.name = pageData.name
    // data.id = pageData.id
    data.cat = pageData.catId
    data.catName = pageData.cat
    data.des = pageData.des
    data.namePic = namePic

    for (let index = 0; index <= indexInsert; index++) {
        
        let txtColor = page.getViewById("txtColor-"+index)
        let txtSize = page.getViewById("txtSize-"+index)
        let txtPrice = page.getViewById("txtPrice-"+index)
        let txtNum = page.getViewById("txtNum-"+index)

         proDetail.push({   
            txtColor: txtColor.text,
            txtSize: txtSize.text,
            txtPrice: txtPrice.text,
            txtNum: txtNum.text,
         })
    }
    data.proDetail = proDetail
    console.log(data)

    fetch(API_URL+"/insertCat", {
        method: "POST",
        headers: { "Content-Type": "application/json",'Accept': 'application/json',},
        body: JSON.stringify(data)
    }).then((r) => r.json())
    .then((response) => {
        console.log(response)
        if(response.status){
            data.cat = response.catId                
            fetch(API_URL+"/insertPro", {
                method: "POST",
                headers: { "Content-Type": "application/json",'Accept': 'application/json',},
                body: JSON.stringify(data)
            }).then((r) => r.json())
            .then((response) => {
                if(response.status == "Success insertPro"){
                    toast = Toast.makeText("insert success","long")
                    toast.show()
                }
                else if(response.status == "Fail insertPro"){
                    toast = Toast.makeText("insert fail")
                    toast.show()
                }
            }).catch((e) => {
                console.log('***fetch error*** InsertPro')
            }); 

        }
        else{
            toast = Toast.makeText("insert fail")
            toast.show()
        }
    }).catch((e) => {
        console.log('***fetch error*** InsertCat')
    });
}
exports.saveData = function() {

    // file path and url
    var m = new Date();
    var dateString =
    m.getUTCFullYear() + 
    ("0" + (m.getUTCMonth()+1)).slice(-2) +
    ("0" + m.getUTCDate()).slice(-2) +
    ("0" + m.getUTCHours()).slice(-2) + 
    ("0" + m.getUTCMinutes()).slice(-2) +
    ("0" + m.getUTCSeconds()).slice(-2);

    var file =  pageData.pic;
    var url = API_URL+"/uploadPic";
    namePic = dateString;
    
    // upload configuration
    var session = bghttp.session("image-upload");
    var request = {
            url: url,
            method: "POST",
            headers: {
                "Content-Type": "application/octet-stream",
            },
            description: "Uploading " + namePic
        };
    let params = [
        { name: "upload", value: true },
        { name: "picName", value: namePic },
        { "name": 'photo', "filename": file, "mimeType": "image/jpg" }
    ];
    if(file){
        let task = session.multipartUpload(params, request);
        task.on("progress", progressHandler);
        task.on("error", errorHandler);
        task.on("responded", respondedHandler);
        task.on("complete", completeHandler);
    } else {
        console.log("NO IMG")
        namePic = ""
        sendInsert()
    }
}

function progressHandler(e) {
    console.log("uploaded " + e.currentBytes + " / " + e.totalBytes);
}
 
function errorHandler(e) {
    console.log("received " + e.responseCode + " code.");
    var serverResponse = e.response;
}
 
function respondedHandler(e) {
    console.log("received " + e.responseCode + " code. Server sent: " + e.data)
    sendInsert()
}
 
function completeHandler(e) {

}
 