//document.getElementById('counter').innerHTML="hello";
//initalize - set-up variables

// window.addEventListener("load", function(){
//   window.scrollTo(0, 1000);
// });

var counter = document.getElementById('counter');
var fromTop = window.pageYOffset;

counter.innerHTML = "counter text";
//pseudocode - when the user is scrolling update the variables fromTop and make decisions to change stuff on the page
// windpw.onscroll <--boolean (yes/no)

window.onscroll = function(){
//when the user scrolls do all of this...
    console.log("scrolling");

    fromTop = window.pageYOffset;
    y = window.pageYOffset;

    //test if it works
    console.log(fromTop);

    counter.style.top = 100 + fromTop + "px";

    if(fromTop > 990){
      counter.innerHTML = "counter text";
      counter.style.backgroundImage = "url(fefe1.svg)";
      counter.style.backgroundRepeat = "no-repeat";
    } else{
      counter.style.backgroundImage = "";
    }

    function runElement(){
    element.classList.add("restart");




    }
  //console.log(y);
// Here's a website that can potentially help you from Marc Vicente: gitmarct.github.io/anilab Good luck <3;
//SCROLL  300

  if(y > 1652){
         console.log("jack 55px");
         document.getElementById("jack").style.right = "800px";
  } else {
         console.log("jack 0px");
         document.getElementById("jack").style.right = "-400px";
  }

  if(y > 2200){
     console.log("moontrees 5px");
     document.getElementById("moon-trees").style.right = "800px";
     } else {
     console.log("moontrees 0px");
     document.getElementById("moon-trees").style.right = "-400px";
     }


       if(y > 2780){
              console.log("cat-tree 55px");
              document.getElementById("cat-tree").style.right = "800px";
         } else {
              console.log("cat-tree -80px");
              document.getElementById("cat-tree").style.right = "-400px";
         }

  if(y > 3240){
        console.log("coco 55px");
        document.getElementById("coco").style.right = "800px";
  } else {
        console.log("coc -80px");
        document.getElementById("coco").style.right = "-400px";
  }
//SCROLL 2000




    if(y > 3900){
           console.log("Moana 55px");
           document.getElementById("Moana").style.rigt = "800px";
    } else {
           console.log("Moana -80px");
           document.getElementById("Moana").style.right = "-400px";
    }



  }

    var element = document.getElementById("test");

    function runAnimation(){
      element.classList.add("restart");
    }

    function stopAnimation(){
      element.classList.remove("restart");
    }


    //window.addEventListener('scroll', runAnimation);

  //element.addEventListener("animationend", stopAnimation);




// function myFunction() {
//     var x = document.createElement("IMG");
//     x.setAttribute("src", "my_tree.jpg");
//     x.setAttribute("width", "304");
//     x.setAttribute("height", "228");
//     x.setAttribute("alt", "The Pulpit Rock");
//     document.body.appendChild(x);
//   }
