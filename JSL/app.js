 var x = prompt('Do you need Iphone or Samsung');

 while( x != "Iphone" && x != 'Samsung')
 {
    x = prompt('Do you need Iphone or Samsung');
 }
var phonetype = '';
if(x == "Iphone")
{
    phonetype = '<img src="iphone.png" width=400 height=650 />';
}
else if(x == "Samsung")
{
    phonetype = '<img src="samsung.jpg"/>';
}
document.write(phonetype)

var z = prompt("Do you want headset (yes or no)");

 q = '<img src="earbud.jpg" width=500 height=350/>';

if(z == "yes")
{
    w = prompt("how many headset do you need");
}

var result =''

for(var i = 0; i < w; i++)
{
    result = result + q;
}
document.write(result);
