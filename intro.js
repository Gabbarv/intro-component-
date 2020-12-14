
function validate()
{
  var a = document.forms["myform"]["fname"].value;
  var b = document.forms["myform"]["lname"].value;
  var c = document.forms["myform"]["email"].value;
  var d = document.forms["myform"]["pass"].value;
  if(a == "" || a == null){
    document.getElementById("firstlbltxt").style.visibility = "visible";
    document.getElementById("firstlblimg").style.visibility="visible";
    document.getElementById("one").style.border="1px solid hsl(0, 100%, 74%)";
    return false;

  } else{
    document.getElementById("firstlbltxt").style.visibility = "hidden";
    document.getElementById("firstlblimg").style.visibility="hidden";
document.getElementById("one").style.border="1px solid black";
  }
  if(b == "" || b == null){
    document.getElementById("lastlbltext").style.visibility = "visible";
    document.getElementById("lastlblimg").style.visibility="visible";
    document.getElementById("two").style.border="1px solid hsl(0, 100%, 74%)";
  return false;
  }
  else{
    document.getElementById("lastlbltext").style.visibility = "hidden";
    document.getElementById("lastlblimg").style.visibility="hidden";
document.getElementById("two").style.border="1px solid black";
  }
  var reg = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
  if(c.match(reg)){


      document.getElementById("emaillbltext").style.visibility="visible";
      document.getElementById("three").style.border="1px solid hsl(0, 100%, 74%)";

  }
  else{
    document.getElementById("emaillbltext").style.visibility="visible";
    document.getElementById("emaillblimg").style.visibility="visible";
    document.getElementById("three").style.border="1px solid black";

}
  if(d == "" || d == null){
    document.getElementById("passlbltext").style.visibility = "visible";
    document.getElementById("passlblimg").style.visibility="visible";
    document.getElementById("four").style.border="1px solid hsl(0, 100%, 74%)";
  return false;
  }
  else{
    document.getElementById("passlbltext").style.visibility = "hidden";
    document.getElementById("passlblimg").style.visibility="hidden";
document.getElementById("four").style.border="1px solid black";
  }


}
