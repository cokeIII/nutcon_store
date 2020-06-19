const labelModule = require("tns-core-modules/ui/label")
const StackLayout = require("tns-core-modules/ui/layouts/stack-layout").StackLayout
const TextField = require("tns-core-modules/ui/text-field").TextField
var gestures = require("tns-core-modules/ui/gestures")

var Observable = require("data/observable")

 var pageData = new Observable.fromObject({
})
let bgInsert = null
let dlgInsert = null
let plus = new labelModule.Label()
let copy = new labelModule.Label()

exports.pageLoaded = function(args){
    page = args.object
    page.bindingContext = pageData
    bgInsert = page.getViewById('bgInsert')
    dlgInsert = page.getViewById('dlgInsert')
}

exports.plus = function(){
    console.log("plus")
    let barColor = new StackLayout()
    let barSize = new StackLayout()
    let barPrice = new StackLayout()
    let barNum = new StackLayout()
    let barBtn = new StackLayout()

    let stackBg = new StackLayout()

    let txtColor = new TextField()
    let txtSize = new TextField()
    let txtPrice = new TextField()
    let txtNum = new TextField()
    
    let color = new labelModule.Label()
    let size = new labelModule.Label()
    let price = new labelModule.Label()
    let num = new labelModule.Label()


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
    copy.text = "\uF0C5"
    plus.text = "\uF067"
    plus.tap = "plus"

    barColor.addChild(color)
    barColor.addChild(txtColor)

    barSize.addChild(size)
    barSize.addChild(txtSize)

    barPrice.addChild(price)
    barPrice.addChild(txtPrice)

    barNum.addChild(num)
    barNum.addChild(txtNum)

    barBtn.addChild(copy)
    barBtn.addChild(plus)

    stackBg.addChild(barColor)
    stackBg.addChild(barSize)
    stackBg.addChild(barPrice)
    stackBg.addChild(barNum)
    stackBg.addChild(barBtn)
    stackBg.className = "bg-insert-obj"
    bgInsert.addChild(stackBg)
}
plus.on(gestures.GestureTypes.tap, function (args) {
    console.log("Tap");
});