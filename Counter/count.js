let counter = 0;

function updateOutput(){
    let str = `${counter}`;
    document.getElementById("countHead").innerHTML = `${str}`;
}

document.getElementById("incrementBtn").addEventListener("click",function(){
    counter++;
    updateOutput();
});

document.getElementById("decrementBtn").addEventListener("click",function(){
    counter--;
    updateOutput();
});

document.getElementById("resetBtn").addEventListener("click",function(){
    counter = 0;
    updateOutput();
});