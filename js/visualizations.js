inp_aspeed.addEventListener("input",vis_speed);

function vis_speed()
{
    var array_speed=inp_aspeed.value;
    delay_time=Math.floor((parseInt(array_speed) / 100) * (0 - 3000) + 3000);      
}

var delay_time=Math.floor((parseInt(array_speed) / 100) * (0 - 3000) + 3000);
var c_delay=0;

function div_update(cont,height,color)
{
    window.setTimeout(function(){
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    },c_delay+=delay_time);
}
function val_update(cont,height,el,color)
{
    window.setTimeout(function(){
        cont.innerHTML=el;
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    },c_delay+=delay_time);
}
function enable_buttons()
{
    window.setTimeout(function(){
        for(var i=0;i<butts_algos.length;i++)
        {
            butts_algos[i].classList=[];
            butts_algos[i].classList.add("butt_unselected");

            butts_algos[i].disabled=false;
            inp_as.disabled=false;
            inp_gen.disabled=false;
            inp_gen1.disabled=false;
            inp_gen2.disabled=false;
            inp_aspeed.disabled=false;
        }
    },c_delay+=delay_time);
}

function set()
{

    for(var i=0;i<array_size;i++)
    {
        val_update(divs[i],div_sizes[i],divs[i].innerHTML,"blue");
    }
}