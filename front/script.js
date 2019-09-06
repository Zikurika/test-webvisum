

function subNav1() {
 
    var div = document.getElementById('subNav');
    document.getElementById('subNav').innerHTML = "";
   
    var ul = document.createElement("ul");
    for (var i = 1; i < 4; i++) {
      var li = document.createElement("li");
      var newLink = document.createElement("a");
      var newContent = document.createTextNode("sub categorie 1" + i);
      newLink.href = "#";
      newLink.appendChild(newContent);
      li.appendChild(newLink);
      ul.appendChild(li);
     
    
    }
    div.appendChild(ul);
}

function subNav2() {
   
    var div = document.getElementById('subNav');
    document.getElementById('subNav').innerHTML = "";
   
    var ul = document.createElement("ul");
    ul.id="2";
    for (var i = 1; i < 4; i++) {
      var li = document.createElement("li");
      var newLink = document.createElement("a");
      var newContent = document.createTextNode("sub categorie 2" + i);
      newLink.id="2"+i;
      newLink.href = "#";
      newLink.onclick=function(){subSubNav(2)};
      newLink.appendChild(newContent);
      li.appendChild(newLink);
      ul.appendChild(li);
     
    
    }
    div.appendChild(ul);
  }

  function subNav3() {
    
    var div = document.getElementById('subNav');
    document.getElementById('subNav').innerHTML = "";
   
    var ul = document.createElement("ul");
    ul.id="3";
    for (var i = 1; i < 4; i++) {
      var li = document.createElement("li");
      var newLink = document.createElement("a");
      var newContent = document.createTextNode("sub categorie 3" + i);
      newLink.href = "#";
      newLink.appendChild(newContent);
      li.appendChild(newLink);
      ul.appendChild(li);
     
    
    }
    div.appendChild(ul);
  }

  function subSubNav (i) {
    
    var newDiv = document.createElement("div");
   
    var newContent = document.createTextNode('Hi there and greetings!');
   
    newDiv.appendChild(newContent);
    
      var li = document.createElement("li");
      var newLink = document.createElement("a");
      var newContent = document.createTextNode("sub categorie 3" + i);
      newLink.href = "#";
      newLink.appendChild(newContent);
      li.appendChild(newLink);
      
    var currentDiv = document.getElementById(i);
    li.insertAdjacentElement('afterend',currentDiv);
    console.log('aaaaaaaaaaaaaaaa')
  }