

  let randomusername = (user) => {
    //combination//
   const name = ['Bruno','Matt','John','Julia','Fred','Mario','Jack','Maria','Daniel','Stephen','Caleb','Larry','Howard','Stan','Carl','Mark','Ernesto','Andrew','Anna','Ana','Juliana','Craig','James','Ragnar','Brian','Steve','Freya','Isaac','Ryan','Ethan','Mia','Peter','Reed','Aaron','Cole','Nicole','Nicolas','Luke'];
   const surname = ['Winters','Stark','Parker','Jordan','Detmer','Montgomery','Redfield','Mattos','Passos','Soarez','Chavez','Baxter','Richards','Nakamoto','Cage'];
   const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','r','s','t','u','v','w','x','y','z'];
   const numbers = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40'];
   const special = ['!','@','#','$','%','&','*','(',')','_','+','-','/'];
   const userName = name[(Math.floor(Math.random()* name.length))] +  surname[(Math.floor(Math.random()* surname.length))] + letters[(Math.floor(Math.random()* letters.length))] +  numbers[(Math.floor(Math.random()* numbers.length))]  + special[(Math.floor(Math.random()* special.length))];
   console.log(userName);
   document.getElementById("userName").innerHTML = userName;
   console.log("usename created");

    
};

let randompassword = (length = 16,alphanum_special = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$_&?+*') => {
const password =  Array.from(crypto.getRandomValues(new Uint32Array(length)))
  .map((x) => alphanum_special[x % alphanum_special.length])
  .join('');
console.log(password);
document.getElementById("password").innerHTML = password;

};