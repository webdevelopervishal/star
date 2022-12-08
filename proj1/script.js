var counter = document.querySelector(".counter"); ///  . means class access and # access id.
var followers = document.querySelector(".followers");
 let count = 1;

 setInterval(() => {
     if (count <1000){
        count++;
      counter.innerText = count;

     }
 },1);

  setTimeout(() => {
    followers.innerText = " followers on Instagram!";

  } , 10000);


  // assg code by get property
  