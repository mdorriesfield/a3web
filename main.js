// file created by Kazuto

// Owner: Kate
function dropMenu() {
  
    var x = document.getElementById("SmallNavBar");
    if (x.className.indexOf("show") == -1) {
      x.className += " show";
    } 
    else { 
      x.className = x.className.replace("show", "");
    }
  }