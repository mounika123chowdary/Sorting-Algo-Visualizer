var inp_as=document.getElementById('a_size'),array_size=inp_as.value;
var inp_gen=document.getElementById("a_generate");
var inp_gen1=document.getElementById("a_generateo");
var inp_gen2=document.getElementById("a_generatet");
var inp_aspeed=document.getElementById("a_speed");

var butts_algos=document.querySelectorAll(".algos button");

var div_sizes=[];
var divs=[];
var margin_size;
var cont=document.getElementById("array_container");
cont.style="flex-direction:row";

inp_gen.addEventListener("click",generate_array);
inp_gen1.addEventListener("click",reverse);
inp_gen2.addEventListener("click",nearly_sorted);
inp_as.addEventListener("input",update_array_size);

function generate_array()
{
    cont.innerHTML="";
    var arr=[];
    for(var i=0;i<array_size;i++){
    	arr.push(i+1);
    }
    for(var i=array_size-1;i>0;i--){
    	var j=Math.floor(Math.random()*(i+1));
    	[arr[i],arr[j]]=[arr[j],arr[i]];
    }
    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(((arr[i])/ array_size) * 100);
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].innerHTML=arr[i];
        divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}
function reverse()
{
    cont.innerHTML="";
    var val=array_size-1;

    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(((val+1)/ array_size) * 100);
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].innerHTML=val+1;
        val--;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}
function nearly_sorted()
{
    cont.innerHTML="";
    var arr=[];
    for(var i=0;i<array_size;i++){
    	arr.push(i+1);
    }
    var swapFactor=0.2;
    var maxSwaps = Math.floor(swapFactor * array_size);
    var swapInterval = Math.floor(1 / swapFactor);
    var position = 0;
    while (maxSwaps && position < array_size) {
      var slotSwap = Math.floor(Math.random() * swapInterval) + position;
      [arr[slotSwap], arr[position]] = [arr[position],arr[slotSwap]];
      maxSwaps--;
      position += swapInterval;
    }
    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(((arr[i])/ array_size) * 100);
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].innerHTML=arr[i];
        divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}
function update_array_size()
{
    array_size=inp_as.value;
    generate_array();
}

window.onload=update_array_size();


for(var i=0;i<butts_algos.length;i++)
{
    butts_algos[i].addEventListener("click",runalgo);
}

function disable_buttons()
{
    for(var i=0;i<butts_algos.length;i++)
    {
        butts_algos[i].classList=[];
        butts_algos[i].classList.add("butt_locked");

        butts_algos[i].disabled=true;
        inp_as.disabled=true;
        inp_gen.disabled=true;
        inp_gen1.disabled=true;
        inp_gen2.disabled=true;
        inp_aspeed.disabled=true;
    }
}

function runalgo()
{
    disable_buttons();
    set();

    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble":Bubble();
                        break;
        case "Selection":Selection_sort();
                        break;
        case "Insertion":Insertion();
                        break;
        case "Merge":Merge();
                        break;
        case "Quick":Quick();
                        break;
        case "Heap":Heap();
                        break;
    }
}
