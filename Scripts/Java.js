function info(name,lastname,age,color) {
    var name = prompt("What is your first name?");
    var lastname =  prompt("What is your last name");
    alert("Hello, "+name+" "+lastname);

    var age = prompt("What is your age,"+name+" "+lastname)
    var color = prompt("Last question,"+name+" "+lastname+".What is your favourite color?")
    alert("Your name is "+name+" "+lastname+" ,you are "+age+" and your favourite color is "+color);

}

function math(X,Y,Z,C,AdditionAnswer,MultiplicationAnswer) {
    var X = prompt("Enter a value");
    var Y = prompt("Enter a second value");
    Z = Number(X) + Number(Y);
    C = Number(X) * Number(Y);
    if(X <= 10, Y <= 10 < 100) {
    var AdditionAnswer = prompt("What is "+X+" + "+Y);
            if(AdditionAnswer == Number(Z)) {
                alert("Correct,the answer is "+Z);
            } else {
                alert("Wrong,the correct answer is "+Z);
            }
    } else if(X >=100, Y >=100) {
        var MultiplicationAnswer = prompt("What is "+X+" x "+Y);
            if(MultiplicationAnswer == Number(C)) {
                alert("Correct,the answer is indeed,"+C);
            } else {
                alert("Wrong,the answer is actually "+C);
            }
    }
}

function name() {
    var name = prompt("Hello, what is your name?");
    var Danger = 'Keren'
    if(name === Danger) {
        alert("Warning! Warning! Danger detected");
    } else {
        alert("Hello "+name)
    }
}
