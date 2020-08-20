function Bubble()
{
    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],"yellow");//Color update

            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j], "red");//Color update
                div_update(divs[j+1],div_sizes[j+1],"red");//Color update

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                var temp=divs[j].innerHTML;
                divs[j].innerHTML=divs[j+1].innerHTML;
                divs[j+1].innerHTML=temp;

                val_update(divs[j],div_sizes[j],divs[j].innerHTML, "red");//Height&val update
                val_update(divs[j+1],div_sizes[j+1],divs[j+1].innerHTML,"red");//Height & val update
            }
            div_update(divs[j],div_sizes[j], "blue");//Color update
        }
        div_update(divs[j],div_sizes[j],"green");//Color update
    }
    div_update(divs[0],div_sizes[0], "green");//Color update

    enable_buttons();
}
