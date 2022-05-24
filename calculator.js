var input=document.querySelector(".box2");
var equation=document.querySelector('.box1');
var equations=[];
var answers=[];
function getVal(x)
{
    if(input.value==0)
    input.value=x;
    else
    input.value+=x;
} 

function ans(){
    equation.value=input.value+"=";
    input.value=eval(input.value);
    equations.push(equation.value);
    answers.push(eval(input.value));
        document.querySelector('#history').innerHTML="";
    for(let i=equations.length-1;i>=0;i--){
        document.querySelector("#history").innerHTML+="<div class='output'><p>"+equations[i]+"</p><p>"+answers[i]+"</p></div>";
    }
}
function clearInput(){

    input.value=0;
    equation.value="";
}
function clearHistory(){
    document.querySelector('#history').innerHTML="";
}
function history(){
    equations.pop(equation.value);
    answers.pop(eval(input.value));
        document.querySelector('#history').innerHTML="";
    for(let i=0;i<=equations.length;i++){
        document.querySelector("#history").innerHTML+="<div class='output'><p>"+equations[i]+"</p><p>"+answers[i]+"</p></div>";
    }
}
