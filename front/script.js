

function subNav(x) {

  var div = document.getElementById('subNav');

  document.getElementById('subNav').innerHTML = "";
  document.getElementById('subsubNav').innerHTML = "";

  var ul = document.createElement("ul");
  for (var i = 1; i < 4; i++) {
    var li = document.createElement("li");
    var newLink = document.createElement("a");
    var newContent = document.createTextNode("sub categorie " + x + "" + i);
    newLink.href = "#";
    newLink.onclick = function () { subSubNav(x) };
    newLink.appendChild(newContent);
    li.appendChild(newLink);
    ul.appendChild(li);
  }
  div.appendChild(ul);
}

function subSubNav(i) {

  document.getElementById('subsubNav').innerHTML = "";
  var ul = document.createElement("ul");
  for (var j = 1; j < 4; j++) {
    var li = document.createElement("li");
    var newLink = document.createElement("a");
    var newContent = document.createTextNode("sub sub categorie "+ i + "" + j );
    newLink.href = "#";
    newLink.appendChild(newContent);
    li.appendChild(newLink);
    ul.appendChild(li);
  }
  var currentDiv = document.getElementById("subsubNav");
  currentDiv.appendChild(ul);
}