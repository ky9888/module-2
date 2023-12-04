const imgs = document.querySelectorAll("img")
const modal=document.getElementById("modal")
const lenghtt=imgs.length
let current=0



setInterval(()=>{
    if (current==lenghtt - 1) {
        current=0
        let widthg =imgs[0].offsetWidth
        modal.style.transform=`translateX(0px)`
    
    }else{
    current ++
    let widthg =imgs[0].offsetWidth
    modal.style.transform=`translateX(${widthg * -1 * current}px)`
    
    }
},4000)