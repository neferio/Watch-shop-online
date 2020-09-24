
function inci()
{
    let z=this.classList.item(1);
    product[z]['quantity']+=1;
    document.getElementById(`${z}score`).innerHTML=product[z]['quantity'];
}