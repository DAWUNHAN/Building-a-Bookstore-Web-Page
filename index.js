/***
File: index.js
Writer: Dawun Han
SID: 460 177 643
Description: Individual Assignment of COMP5347
***/
var tempSearch;
var trsArray = [];
var tempCategory;
var trsArrayCategory = [];
var cart=0;

window.onload = function() {
  var mainForm = document.getElementById("mainForm");
  var table = document.getElementById("tableData");
  var trs = table.getElementsByTagName("td");
  for (var i=0; i<trs.length; i++){
    trsArray.push(trs[i]);
  }

  mainForm.onsubmit = function(e) {

    var input = document.getElementById("mySearch").value;
    tempSearch = input;
    e.preventDefault();



   }
}

//Make a searched colum red
function makeYellow(word){

  var found;
  found = window.find(word);
  //console.log(found);
  //console.log(word);
  if(word){
    tr = word.parentNode.parentNode;
    tr.style.backgroundColor = "yellow";

  }
}

//Filter function
function selectCate(num){
  var hiddenForm = document.getElementById("tableData");
  var theForm = hiddenForm.getElementsByTagName("tr");


  for(var i=0; i<theForm.length; i++){
    theForm[i].style.display = "none";

  }
  if(theForm[num]){
    theForm[2*num].style.display = "block";
    theForm[2*num-1].style.display = "block";
  }
}

//Function of Reset the cart
function resetCart(){
  if(confirm("Reset the cart")){

  }
}

//Function of checkbox
function check(it){
  tr = it.parentNode.parentNode;
  tr.style.backgroundColor = (it.checked) ? "gold" : "white";
  cart++;
}

//Function of 'add to cart'
function addCart(_f){
    console.log(cart);
    _f.numCart.value = cart;
}
