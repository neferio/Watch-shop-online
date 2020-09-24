document.querySelector('#fa').addEventListener('click',appea);
document.querySelector('#clo').addEventListener('click',clos);
let q=window.matchMedia("(max-width:400px)");
function appea()
{
    document.getElementById('cart').style.display='block';
    if(q.matches)
    {
        document.getElementById('cart').style.width='200px';
    }
    else
    {
        document.getElementById('cart').style.width='350px';
    }
   console.log('hey');
}
function clos()
{
    document.getElementById('cart').style.display='none';
    document.getElementById('cart').style.width='0px';
    console.log('hey');
}