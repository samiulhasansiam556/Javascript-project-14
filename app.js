

let number = document.getElementById("number");
let sum = document.getElementById("sum");
let average = document.getElementById("average");
let bt = document.getElementById("bt");

bt.addEventListener("click", function(){
    
     let s = 0,a = 0,p = 1;
     
     let numbers = number.value;

     numbers = numbers.replaceAll(" ","");

     let arry = numbers.split(",");

     let newArry = arry.map( item =>{
        return Number.parseFloat(item);
     }); 

     let validArry = newArry.filter( item =>{
        return !(isNaN(item));
     });

     validArry.forEach(element => {
           s +=element;
           p *=element;
     });

      a = s / validArry.length;

      sum.value = s.toFixed(2);
      product.value = p.toFixed(2);
      average.value = a.toFixed(2);


});