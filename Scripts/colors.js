const supportedColours = [
    "aliceblue", "aqua", "blue", "red", "black", "pink", "brown", "yellow", "orange", "green", "purple", "cyan", "antiquewhite",
    "aquamarine", "azure","beige", "bisque", "blanchedalmond", "blueviolet", "burlywood", "crimson", "darkblue", "darkcyan"
];

function ColourChanger() {
    var colourOne = document.getElementById("Colour-one");
    var colourTwo = document.getElementById("Colour-two");

    const one = colourOne;
    const two = colourTwo;

    if(one === !supportedColours) {
        
    }

   
    
}

document.getElementById("Colour-one").addEventListener("input", ColourChanger);;
document.getElementById("Colour-two").addEventListener("input", ColourChanger);;


ColourChanger();

