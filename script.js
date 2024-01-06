function getNo()
{
    let no1id = document.getElementById('num1');
    let no2id = document.getElementById('num2');
    let no1 = parseInt(no1id.value, 10);
    let no2 = parseInt(no2id.value, 10);
    let select= document.getElementById('op');
    let selop= select.options[select.selectedIndex];
    let selval= selop.value;
    let result;
    if(selval=='add')
        result= no1+no2;
    else if(selval=='subtract')
        result= no1-no2;
    else if(selval=='multiply')
        result= no1*no2;
    else if(selval=='divide' && no2!=0)
        result= no1/no2;
    else if(selval=="")
        alert('Please enter a number!');
    else
        alert('Dividing be zero results in Infinity!')
    var displayResult = document.getElementById('output');
    displayResult.textContent = 'Result: ' + result;
}