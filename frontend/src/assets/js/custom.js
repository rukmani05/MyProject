
// var mini = true;

// function toggleSidebar() {
//   if (mini) {
//     console.log("opening sidebar");
//     document.getElementById("mySidebar").style.width = "250px";
//     document.getElementById("main").style.marginLeft = "250px";
  

  
//     this.mini = false;
//   } else {
//     console.log("closing sidebar");
//     document.getElementById("mySidebar").style.width = "68px";
//     document.getElementById("main").style.marginLeft = "85px";
    

   
//     this.mini = true;
//   }
// }
const currentLocation=loaction.href;
const menuItem=document.querySelectorAll('a');
const menuLength=menuItem.length
for(let i=0;i<menuLength;i++){
    if(menuItem[i].href===currentLocation){
        menuItem[i].className="active"

    }
}