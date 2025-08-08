const header = document.querySelectorAll(".header");
const details = document.querySelectorAll(".details");

header.forEach((head, ind) => {
    head.addEventListener("click", () => {
        details.forEach((d, i) => {
            if (ind == i) {
                details[ind].style.display = details[ind].style.display == "block" ? "none" : "block";
            }
            else {
                details[i].style.display = "none";
            }
        })

    })

})

const bttn = document.querySelectorAll(".bttn");
const sent = document.querySelectorAll(".sent");
sent[0].style.display ="block" ;
bttn[0].style.backgroundColor = "#ede435ff"; 

bttn.forEach((headd, nd) => {
 headd.addEventListener("click",() => {

    sent.forEach((dd, s) => {
        if(nd == s){
             sent[nd].style.display ="block" ;
             bttn[nd].style.backgroundColor = "#ede435ff"; 

        }
        else{
            sent[s].style.display ="none";
            bttn[s].style.backgroundColor = "#bef576"; 

        }
    })
    })
})
const hour = document.querySelectorAll(".hrs12")
const time = document.getElementById("time");
const showTime = () =>{
const d = new Date();
let hrs = d.getHours();
const ampm = hrs >= 12 ? "PM":"AM";
 hrs = hrs > 12? hrs-12 :hrs ;

// hour.forEach((hours, index) => {
// hours.addEventListener("click",()=>{

// hour.[index] = hrs > 12? hrs-12 :hrs ;})
// })

time.innerText = hrs + ":"+ d.getMinutes() + ":" + d.getSeconds() +" "+ ampm;
console.log(d.getHours()+ ":"+ d.getMinutes() + ":" + d.getSeconds() )
}
showTime();
setInterval(showTime, 1000);


// hours.forEach( (time, ss)=>{
//     if(index=ss){
//         hrs = hrs > 12? hrs-12 :hrs ;
//     }
//     else{
//         hrs = hrs;
//     }
// })