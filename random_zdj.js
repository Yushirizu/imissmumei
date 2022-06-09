
function getRandomImage() 
{  
    var randomimage = new Array();

        randomimage[0] = "assets/sad.webp";
        randomimage[1] = "assets/sad2.webp";
        randomimage[2] = "assets/sad3.webp";
        randomimage[3] = "assets/sad4.webp";
        randomimage[4] = "assets/sad5.webp";
        randomimage[5] = "assets/sad6.webp";
        randomimage[6] = "assets/sad7.webp";

    var number = Math.floor(Math.random()*randomimage.length);  

    return document.getElementById("result").innerHTML = '<img src="'+randomimage[number]+'" />';  
}  

window.onload = getRandomImage();