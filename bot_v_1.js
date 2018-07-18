var msgBox
var recMsg

var actChats = []
var eventFire = (el, etype) => {
	var evt = document.createEvent("MouseEvents");
	evt.initMouseEvent(etype, true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
	el.dispatchEvent(evt);
}

function getUnread() {
    actChats = document.getElementsByClassName("_15G96")

}

setInterval(start,5000)
function start(){
    bot(getUnread)

}
async function bot(getUnread){
    getUnread()
    for(const item of actChats) {

        if(index =! null){
            await  sendModule(item)
        }
        else
        continue
        //event = document.createEvent("UIEvents")
        //event.initUIEvent("input", true, true, window, 1)
        //msgBox.focus()

    }
}

   function getBox(){
        return new Promise((resolve,reject) => setTimeout(() =>{
            msgBox =  document.querySelectorAll("[contenteditable='true']")[0]
            getLastMessage()
              resolve("success") } , 500

        ))


    }



 function sendMessage(msg) {
     // window.focus()
    msgBox.innerHTML =  msg

    event = document.createEvent("UIEvents")
    event.initUIEvent("input", true, true, window, 1)
    msgBox.dispatchEvent(event)
    eventFire(document.querySelector('span[data-icon="send"]'), 'click')
    //tar = document.getElementsByClassName("_9tCEa")
    //window.focus()
    //eventFire(tar[0],'mousedown')


}

 function getLastMessage() {
    allRec = document.getElementsByClassName("message-in")

    recMsg = allRec[allRec.length -1].innerText.match(/\w+/)[0]
     reply = getReply(recMsg)
    sendMessage(reply)
}


async function sendModule(index) {
    console.log("step 0")


    boxTitle = undefined
    msgBox = undefined
    chatTitle = index.offsetParent.innerText.match(/\w+/)[0]
    eventFire(index.offsetParent,'mousedown')


        await getBox()
        //index.remove("span")
        return new Promise((resolve,reject) => {
            resolve("success")
        })


}

function getReply(inc) {
     inc = inc.toUpperCase()
    if (inc == 'HI'){
        return "hello " + chatTitle + " :)"
    }
     else
     return "I didnt get that "
}

 
