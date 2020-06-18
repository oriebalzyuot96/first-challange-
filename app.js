//console.log("you can do")
//build table ...using some referance i mintioned in readme ...and make styling ..
//so i build 1st design 
//add event for each square in board(cell)

//problem:work to one cell
//document.querySelector(".cell1").addEventListener('click',function(){
// 	console.log("orieb")
// },false)

// document.getElementsByClassName('cell2')[0]
//         .addEventListener('click', function (event) {
//             // do something
//             console.log("cell2")
//         });


//add 2player (switch)
//click by one player
//toggle and check ???







var clk = document.getElementsByClassName('cell');

Array.prototype.forEach.call(clk, function(element) {
  element.addEventListener('click', function() {
    // console.log('data-wow value is: ' + element.dataset.wow);



    var div = document.getElementById('1');
    if(div === "x"){
    	console.log("not empty")
    }
    	else{
     div.innerHTML += 'x';
    }


    var div = document.getElementById('2');

   if(div === "o"){
    	console.log("not empty")
    }
    	else{
     div.innerHTML += "o";
    }

    var div = document.getElementById('3');
     if(div === "x"){
    	console.log("not empty")
    }
    	else{
     div.innerHTML += 'x';
    }

    var div = document.getElementById('4');
   if(div === "o"){
    	console.log("not empty")
    }
    	else{
     div.innerHTML += 'o';
    }

    var div = document.getElementById('5');
     if(div === "x"){
    	console.log("not empty")
    }
    	else{
     div.innerHTML += 'x';
    }
    var div = document.getElementById('6');
  if(div === "o"){
    	console.log("not empty")
    }
    	else{
     div.innerHTML += 'o';
    }

    var div = document.getElementById('7');
     if(div === "x"){
    	console.log("not empty")
    }
    	else{
     div.innerHTML += 'x';
    }

    var div = document.getElementById('8');
  if(div === "o"){
    	console.log("not empty")
    }
    	else{
     div.innerHTML += 'o';
    }


    var div = document.getElementById('9');
   if(div === "x"){
    	console.log("not empty")
    }
    	else{
     div.innerHTML += 'x';
    }


  });

});