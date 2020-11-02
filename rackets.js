var slider1 = document.getElementById("myRange1");
var output1= document.getElementById("demo1");
output1.innerHTML = slider1.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider1.oninput = function() {
  output1.innerHTML = slider1.value;
}


var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("demo2");
output2.innerHTML = slider2.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider2.oninput = function() {
  output2.innerHTML = slider2.value;
}

var slider3 = document.getElementById("myRange3");
var output3 = document.getElementById("demo3");
output3.innerHTML = slider3.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider3.oninput = function() {
  output3.innerHTML = slider3.value;
}


// spin 
let curr_slider1_val = 2; 

// power 
let curr_slider2_val = 2; 

// feel 
let curr_slider3_val = 2; 


slider1.onchange = function(){ 
  curr_slider1_val = parseInt(slider1.value);  
  var childCount = document.getElementById("grid-container").childElementCount;
  if(childCount > 0){ 
    data.forEach(deleteItems); 
  }
  data.forEach(addItems); 
}

slider2.onchange = function(){ 
  curr_slider2_val = parseInt(slider2.value);  

  var childCount = document.getElementById("grid-container").childElementCount;
  if(childCount > 0){ 
    data.forEach(deleteItems); 
  } 
  data.forEach(addItems); 
}

slider3.onchange = function(){ 
  curr_slider3_val = parseInt(slider3.value);  
  var childCount = document.getElementById("grid-container").childElementCount;
  if(childCount > 0){ 
    data.forEach(deleteItems); 
  } 
  data.forEach(addItems); 
}

var data = [

  // 1's 
  {"img_src": "babolat-nadal-junior", "spin": 1, "power": 1, "feel": 1, "header": "Babolat Nadal Junior", "text": "The wilson blade is a great standard racket for beginners", "id": 12}, 
  {"img_src": "pure-drive", "spin": 1, "power": 2, "feel": 3, "header": "Babolat Pure Drive", "text": "The wilson blade is a great standard racket for beginners", "id": 1}, 
  {"img_src": "babolat-standard", "spin": 1, "power": 2, "feel": 2, "header": "Babolat Standard Racket", "text": "The wilson blade is a great standard racket for beginners", "id": 2}, 
  {"img_src": "wilson-ultra-2", "spin": 1, "power": 2, "feel": 1, "header": "Wilson Ultra", "text": "The wilson blade is a great standard racket for beginners", "id": 3},
  {"img_src": "pure-drive", "spin": 1, "power": 3, "feel": 2, "header": "Babolat Pure Drive", "text": "The wilson blade is a great standard racket for beginners", "id": 4}, 



  // 2's 
  {"img_src": "yonex-kyrgios", "spin": 2, "power": 2, "feel": 2, "header": "Yonex Kyrgios Edition","text": "The wilson blade is a great standard racket for beginners", "id": 5},
  {"img_src": "fedracket", "spin": 2, "power": 2, "feel": 2, "header": "Federer Racket", "text": "The wilson blade is a great standard racket for beginners", "id": 18}, 
  {"img_src": "babolat-nadal-junior", "spin": 2, "power": 2, "feel": 2, "header": "Babolat Nadal Junior", "text": "The wilson blade is a great standard racket for beginners", "id": 19}, 
  {"img_src": "yonex-kyrgios", "spin": 2, "power": 2, "feel": 2, "header": "Yonex Kyrgios Edition","text": "The wilson blade is a great standard racket for beginners", "id": 20},
  {"img_src": "fedracket", "spin": 2, "power": 2, "feel": 2, "header": "Federer Racket", "text": "The wilson blade is a great standard racket for beginners", "id": 21}, 
  {"img_src": "babolat-nadal-junior", "spin": 2, "power": 2, "feel": 2, "header": "Babolat Nadal Junior", "text": "The wilson blade is a great standard racket for beginners", "id": 22}, 
  {"img_src": "yonex-kyrgios", "spin": 2, "power": 2, "feel": 2, "header": "Yonex Kyrgios Edition","text": "The wilson blade is a great standard racket for beginners", "id": 23},
  {"img_src": "fedracket", "spin": 2, "power": 2, "feel": 2, "header": "Federer Racket", "text": "The wilson blade is a great standard racket for beginners", "id": 24}, 
  {"img_src": "babolat-nadal-junior", "spin": 2, "power": 2, "feel": 2, "header": "Babolat Nadal Junior", "text": "The wilson blade is a great standard racket for beginners", "id": 25}, 
  {"img_src": "pure-drive", "spin": 2, "power": 2, "feel": 3, "header": "Babolat Pure Drive", "text": "The wilson blade is a great standard racket for beginners", "id": 26}, 
  {"img_src": "yonex-kyrgios", "spin": 2, "power": 2, "feel": 3, "header": "Yonex Kyrgios Edition","text": "The wilson blade is a great standard racket for beginners", "id": 27},


  {"img_src": "fedracket", "spin": 2, "power": 3, "feel": 3, "header": "Federer Racket", "text": "The wilson blade is a great standard racket for beginners", "id": 6}, 


  // 3's 
  
  {"img_src": "orange-babolat", "spin": 3, "power": 1, "feel": 3, "header": "Orange Babolat Edition","text": "The wilson blade is a great standard racket for beginners", "id": 7}, 
  {"img_src": "pure-strike", "spin": 3, "power": 2, "feel": 2, "header": "Babolat Pure Strike", "text": "The wilson blade is a great standard racket for beginners", "id": 8}, 
  {"img_src": "brazil-babolat", "spin": 3, "power": 2, "feel": 3, "header": "Babolat Brazil Edition", "text": "The wilson blade is a great standard racket for beginners", "id": 9},
  {"img_src": "babolat-pure-aero", "spin": 3, "power": 2, "feel": 3, "header": "Babolat Pure Aero", "text": "The wilson blade is a great standard racket for beginners", "id": 10}, 
  {"img_src": "pure-strike-3rd-gen", "spin": 3, "power": 2, "feel": 3, "header": "Pure Strike 3rd Gen", "text": "The wilson blade is a great standard racket for beginners", "id": 11}, 
  {"img_src": "brazil-babolat", "spin": 3, "power": 2, "feel": 3, "header": "Babolat Brazil Edition", "text": "The wilson blade is a great standard racket for beginners", "id": 12},
  {"img_src": "babolat-pure-aero", "spin": 3, "power": 2, "feel": 3, "header": "Babolat Pure Aero", "text": "The wilson blade is a great standard racket for beginners", "id": 13}, 
  {"img_src": "pure-strike-3rd-gen", "spin": 3, "power": 2, "feel": 3, "header": "Pure Strike 3rd Gen", "text": "The wilson blade is a great standard racket for beginners", "id": 14}, 
  {"img_src": "brazil-babolat", "spin": 3, "power": 2, "feel": 3, "header": "Babolat Brazil Edition", "text": "The wilson blade is a great standard racket for beginners", "id": 15},
  {"img_src": "babolat-pure-aero", "spin": 3, "power": 2, "feel": 3, "header": "Babolat Pure Aero", "text": "The wilson blade is a great standard racket for beginners", "id": 16}, 
  {"img_src": "pure-strike-3rd-gen", "spin": 3, "power": 2, "feel": 3, "header": "Pure Strike 3rd Gen", "text": "The wilson blade is a great standard racket for beginners", "id": 17}, 





]




function addItems(item){ 
  // if all values are equal 
  console.log("add Items reached"); 
  if (curr_slider1_val == item.spin && curr_slider2_val == item.power && curr_slider3_val == item.feel){ 
    const div = document.createElement('div');
    div.className = 'item';
    div.id = item.id;

    div.innerHTML = `
      <img src = ${item.img_src}.png alt = "${item.text}"/>
      <h2> ${item.header} </h2> 
      <p> ${item.text} </p> 
    `;
    document.getElementById("grid-container").appendChild(div);
    console.log("add items fired")
  }

}


function deleteItems(item){   
  if (curr_slider1_val != item.spin || curr_slider2_val != item.power || curr_slider3_val != item.feel){ 
    console.log("id " + item.id);
    var delobj = document.getElementById(item.id);
    if (delobj != null){ 
      delobj.remove();  
    }
    console.log(delobj); 
    console.log("delete items fired"); 
  } 

}



// onload add the items 
window.onload = function(){
  data.forEach(addItems); 
}
