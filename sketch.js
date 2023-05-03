var imageDir = "assets/";

var project;
var slide;
var clicked = false;
var run = false;
var writingRun = false;
var currentColour;
var colourIndex;
var div = document.getElementById("contentBox");

function setup(){
  colourIndex = floor(random(0, colours.length));
  // currentColour = 255;
  document.body.style.background = 255;
}

document.addEventListener("click", hideOat);

function hideOat(){
  document.getElementById("landingImage").style.display = "none";
}


function contentSelect(x){
  var titleContent = x;

  switch(titleContent){
    case 0:
      //show work titles
      document.getElementById("artists").style.display = "block";
      clearBox();

      document.getElementById("about").style.display = "none";
      document.getElementById("forum").style.display = "none";
      document.getElementById("performances").style.display = "none";
    break;

    case 1:
      document.getElementById("about").style.display = "block";
      clearBox();

      document.getElementById("artists").style.display = "none";
      document.getElementById("forum").style.display = "none";
      document.getElementById("performances").style.display = "none";
    break;

    case 2:
      document.getElementById("forum").style.display = "block";
      clearBox();

      document.getElementById("artists").style.display = "none";
      document.getElementById("about").style.display = "none";
      document.getElementById("performances").style.display = "none";
    break;

    case 3:
      document.getElementById("performances").style.display = "block";
      clearBox();

      document.getElementById("artists").style.display = "none";
      document.getElementById("about").style.display = "none";
      document.getElementById("forum").style.display = "none";
    break;
    default:
    //
  }
}

function workDisplay(contentID){
  document.getElementById("artists").style.display = "none";
  // clearBox();
  if (run == true){
    clearBox();
    run = false;
  }

  if (writingRun == true){
    clearWriting();
    writingRun = false;
  }

  document.getElementById(contentID).style.display = "block";
  run = true;
}

function clearBox(){
  document.getElementById('agata').style.display = "none";
  document.getElementById('ana').style.display = "none";
  document.getElementById('anck').style.display = "none";
  // document.getElementById('auryn').style.display = "none";
  document.getElementById('beiqing').style.display = "none";
  document.getElementById('devon').style.display = "none";
  document.getElementById('feier').style.display = "none";
  document.getElementById('guro').style.display = "none";
  document.getElementById('isabella').style.display = "none";
  document.getElementById('kaito').style.display = "none";
  document.getElementById('kelsey').style.display = "none";
  document.getElementById('luna').style.display = "none";
  document.getElementById('mary').style.display = "none";
  document.getElementById('misia').style.display = "none";
  document.getElementById('noah').style.display = "none";
  document.getElementById('szymon').style.display = "none";
  document.getElementById('theo').style.display = "none";
  document.getElementById('tiffany').style.display = "none";
  document.getElementById('vendela').style.display = "none";
  document.getElementById('xinde').style.display = "none";
  document.getElementById('yangqiandai').style.display = "none";
  document.getElementById('yiying').style.display = "none";
}


// function writingDisplay(x){
//   var project = x;
//   var div = document.getElementById("writingBox");

//   if (run == true){
//     clearBox();
//     run = false;
//   }

//   if (writingRun == true){
//     clearWriting();
//     writingRun = false;
//   }

//   div.innerHTML += writings[project];
//   writingRun = true;
// }

// function clearWriting(){
//   var div = document.getElementById("writingBox");
//   div.innerHTML = "";
// }
