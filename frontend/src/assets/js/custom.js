
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

// window.onscroll = function() {myFunction()};

// var header = document.getElementById("myHeader");
// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
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



 function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview').css('background-image', 'url('+e.target.result +')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#imageUpload").change(function() {
    readURL(this);
});




