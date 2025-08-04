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
// header[0].addEventListener("click", () => {
// details[0].style.display = details[0].style.display == "block" ? "none": "block";
// })

// header.forEach((head, ind) => {
//     head.addEventListener("click" ,() => {
//         details[ind].style.display = details[0].style.display == "block" ? "none": "block";

//     })
// })
const bttn = document.querySelectorAll(".bttn");
const sent = document.querySelectorAll(".sent");
sent[0].style.display ="block" ;
bttn.forEach((headd, nd) => {
 headd.addEventListener("click",() => {

    sent.forEach((dd, s) => {
        if(nd == s){
             sent[nd].style.display ="block" ;
        }
        else{
            sent[s].style.display ="none";
        }
    })
    })
})

