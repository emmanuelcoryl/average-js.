

var num1 = parseInt(prompt('Enter your math results'));
var num2 = parseInt(prompt('Enter your Bio results'));
var num3 = parseInt(prompt('Enter your phyc results'));



if (num1<0 || num1>100 || num2<0 || num2>100 || num3<0 || num3>100){
    alert('error... input number between 1 and 100');
}

else{
    var num4 = num1 + num2 + num3;
    var result = num4 / 3;

        if(result<50){
            alert ('Fail');
            alert ('Your average result is:'+result);
        }
        else if(result>=50 && result <60){
            alert ('Pass');
           alert ('Your average result is:'+result);
        }
        else if (result>=60 && result<80){
            alert ('Credit');
            alert ('Your average result is:'+result);
        }
        else if (result>=80 && result<=100) {
            alert('Distiction');
            alert ('Your average result is:'+result);
        }
        else if (result>100 && result<0){
        alert('error... input number between 1 and 100');
        }
}