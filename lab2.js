function userInput()
{

    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    var n3 = document.querySelector('input[name="Math"]:checked').value;
    var result;

    if(n3 === "Add"){
        result= n1+n2;
    }
    if(n3 === "Subtract"){
        result = n1-n2;
    }
    if(n3 === "Multiply"){
        result = n1 * n2;
    }
    if(n3 === "Divide"){
        result = n1 / n2;
    }
    var x = document.getElementById("result");
    x.value =  result;



    
}