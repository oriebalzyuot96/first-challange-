//console.log("you can do")
//build table ...using some referance i mintioned in readme ...and make styling ..
//so i build 1st design 
//add event for each square in board(cell)

//problem:work to one cell
//document.querySelector(".cell1").addEventListener('click',function(){
// 	console.log("orieb")
// },false)



//add 2player (switch)
//click by one player
//toggle and check ???

//textcontent..check


var value = ["x","o"]
document.getElementsByClassName('cell1')[0]
        .addEventListener('click', function (event) {
            // do something
            //console.log("cell1")
            var div = document.getElementById('1');
             if ( (div.textContent ===value[0])||(div.textContent ===value[1])){
   	 	console.log("done")
    }
    	else{
     div.innerHTML += value[0];
    
   }
        });





document.getElementsByClassName('cell2')[0]
        .addEventListener('click', function (event) {
            // do something
            //console.log("cell1")
            var div2 = document.getElementById('2');
             if ( (div2.textContent ===value[0])||(div2.textContent ===value[1])){
   	 	console.log("done")
    }
    	else{
     div2.innerHTML += value[1];
    
   }
        });





document.getElementsByClassName('cell3')[0]
        .addEventListener('click', function (event) {
            // do something
            //console.log("cell1")
            var div = document.getElementById('3');
             if ( (div.textContent ===value[0])||(div.textContent ===value[1])){
   	 	console.log("done")
    }
    	else{
     div.innerHTML += value[0];
    
   }
        });


document.getElementsByClassName('cell4')[0]
        .addEventListener('click', function (event) {
            // do something
            //console.log("cell1")
            var div = document.getElementById('4');
             if ( (div.textContent ===value[0])||(div.textContent ===value[1])){
   	 	console.log("done")
    }
    	else{
     div.innerHTML += value[1];
    
   }
        });



document.getElementsByClassName('cell5')[0]
        .addEventListener('click', function (event) {
            // do something
            //console.log("cell1")
            var div5 = document.getElementById('5');
             if ( (div5.textContent === " ")){
             	div5.innerHTML += value[0];
   	 	
   	 	
    }
    	
    	else{
    console.log("done")
    
   }
   //      
});



document.getElementsByClassName('cell6')[0]
        .addEventListener('click', function (event) {
            // do something
            //console.log("cell1")
            var div = document.getElementById('6');
             if ( (div.textContent ===value[0])||(div.textContent ===value[1])){
   	 	console.log("done")
    }
    	else{
     div.innerHTML += value[1];
    
   }
        });

document.getElementsByClassName('cell7')[0]
        .addEventListener('click', function (event) {
            // do something
            //console.log("cell1")
            var div = document.getElementById('7');
             if ( (div.textContent ===value[0])||(div.textContent ===value[1])){
   	 	console.log("done")
    }
    	else{
     div.innerHTML += value[0];
    
   }
        });


document.getElementsByClassName('cell8')[0]
        .addEventListener('click', function (event) {
            // do something
            //console.log("cell1")
            var div = document.getElementById('8');
             if ( (div.textContent ===value[0])||(div.textContent ===value[1])){
   	 	console.log("done")
    }
    	else{
     div.innerHTML += value[1];
    
   }
        });


document.getElementsByClassName('cell9')[0]
        .addEventListener('click', function (event) {
            // do something
            //console.log("cell1")
            var div = document.getElementById('9');
             if ( (div.textContent ===value[0])||(div.textContent ===value[1])){
   	 	console.log("done")
    }
    	else{
     div.innerHTML += value[0];
    
   }
        });














// var clk = document.getElementsByClassName('cell');

// Array.prototype.forEach.call(clk, function(element) {
//   element.addEventListener('click', function() {
//     // console.log('data-wow value is: ' + element.dataset.wow);

// var div = document.getElementById('1');
//     // if(div === "x"){
//     // 	console.log("not empty")
//     // }
//     // 	else{
//     //  div.innerHTML += 'x';
//     // }
//   if ( (div.textContent ===value[0])||(div.textContent ===value[0])){
//    	 	console.log("empty")
//     }
//     	else{
//      div.innerHTML += value[0];
    
//    }



//      });

// });
