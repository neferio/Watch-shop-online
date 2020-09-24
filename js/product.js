let arr=document.getElementsByClassName("add");
for(let i=0;i<arr.length;i++)
{
    arr[i].addEventListener('click',addie);
}
let product={
    'imgs':['1','2','3','4','5','6','7','8'],
    'isdiv':{'1':false,'2':false,'3':false,'4':false,'5':false,'6':false,'7':false,'8':false},
    '1':{'name':'Mavericks','price':200,"quantity":0},
    '2':{'name':'Edifice','price':350,"quantity":0},
    '3':{'name':'Allie','price':300,"quantity":0},
    '4':{'name':'Cooper','price':150,"quantity":0},
    '5':{'name':'Fastrack','price':50,"quantity":0},
    '6':{'name':'Fontise','price':100,"quantity":0},
    '7':{'name':'Tendence','price':250,"quantity":0},
    '8':{'name':'Roger Dubus','price':500,"quantity":0},
    'finalcart':0,
    'totalcount':0,
};
function maindiv(number)
{
    let maindiv=document.createElement('div');
    maindiv.setAttribute(`id`,`main${number}`);
    let ref=document.querySelector('#cart');
    ref.insertBefore(maindiv,ref.lastElementChild);
    product['isdiv'][number]=true;

}
function imgdiv(number)
{
    let imgd=document.createElement('div');
    imgd.setAttribute('id',`${number}img`);
    document.getElementById(`main${number}`).appendChild(imgd);
}
function txtdiv(number)
{
    let txtd=document.createElement('div');
    txtd.setAttribute('id',`${number}txt`);
    document.getElementById(`main${number}`).appendChild(txtd);
}
function btndiv(number)
{
    let btnd=document.createElement('div');
    btnd.setAttribute('id',`${number}btn`);
    document.getElementById(`main${number}`).appendChild(btnd);
}    
function createimg(number)
{
    let prod_img=document.createElement('img');
    prod_img.src=`img/${number}.jpg`;
    document.getElementById(`${number}img`).appendChild(prod_img);
}
function createtxt(number)
{
    let tagh3=document.createElement('h3');
    let txt=document.createTextNode(product[number]['name']);
    tagh3.appendChild(txt);
    let spantag=document.createElement('span');
    let ratet=document.createTextNode(`$ ${product[number]['price']}`);
    spantag.appendChild(ratet);
    let all=document.createElement('h6');
    all.setAttribute('class',`remo ${number}`);
    let dele=document.createTextNode("REMOVE ALL");
    all.appendChild(dele);
    all.addEventListener('click',removeall);
    let bre=document.createElement('br');
    document.getElementById(`${number}txt`).appendChild(tagh3);
    document.getElementById(`${number}txt`).appendChild(spantag);
    document.getElementById(`${number}txt`).appendChild(all);
}
function createbtn(number)
{
    let up=document.createElement('button');
    up.setAttribute('type','button')
    up.setAttribute('class',`up ${number} fa fa-angle-double-up`);
    up.addEventListener('click',inci);
    let bre=document.createElement('br');
    let bre2=document.createElement('br');
    let down=document.createElement('button');
    down.setAttribute('type','button')
    down.setAttribute('class',`down ${number} fa fa-angle-double-down`);
    down.addEventListener('click',deci);
    let txtsc=document.createElement('span');
    txtsc.setAttribute('id',`${number}score`);
    let score=document.createTextNode(product[`${number}`]['quantity']);
    txtsc.appendChild(score);
    document.getElementById(`${number}btn`).appendChild(up);
    document.getElementById(`${number}btn`).appendChild(bre);
    document.getElementById(`${number}btn`).appendChild(txtsc);
    document.getElementById(`${number}btn`).appendChild(bre2);
    document.getElementById(`${number}btn`).appendChild(down);
}
function updatequan(number)
{
    product[number]['quantity']+=1;
    product['totalcount']+=1;
    product['finalcart']+=product[number]['price'];
    document.getElementById('finalscore').innerHTML=product['finalcart'];
    document.getElementById('counter').innerHTML=product['totalcount'];
}
function addie()
{
    var number=this.id;
    if(product['isdiv'][number]===false )
    {
        updatequan(number);
        maindiv(number);
        imgdiv(number);
        txtdiv(number);
        btndiv(number);
        createimg(number);
        createtxt(number);
        createbtn(number);
        console.log('yoo');
        product['isdiv'][number]=true;
    }
}
function inci()
{
    let z=this.classList.item(1);
    product[z]['quantity']+=1;
    product['finalcart']+=product[z]['price'];
    product['totalcount']+=1;
    document.getElementById(`${z}score`).innerHTML=product[z]['quantity'];
    document.getElementById('finalscore').innerHTML=product['finalcart'];
    document.getElementById('counter').innerHTML=product['totalcount'];
}
function deci()
{
    let de=this.classList.item(1);
    product['finalcart']-=product[de]['price'];
    product['totalcount']-=1;
    if(product[de]['quantity']>1)
    {
        product[de]['quantity']-=1;
        document.getElementById(`${de}score`).innerHTML=product[de]['quantity'];
    }
    else
    {
        product[de]['quantity']=0;
        let remov=document.getElementById(`main${de}`);
        remov.remove();
        product['isdiv'][de]=false;
    }
    document.getElementById('finalscore').innerHTML=product['finalcart'];
    document.getElementById('counter').innerHTML=product['totalcount'];
}
function removeall()
{
    let re=this.classList.item(1);
    product['finalcart']-=(product[re]['quantity']*product[re]['price']);
    product['totalcount']-=product[re]['quantity']
    document.getElementById('finalscore').innerHTML=product['finalcart'];
    document.getElementById('counter').innerHTML=product['totalcount'];
    product[re]['quantity']=0;
    product['isdiv'][re]=false;
    let remov=document.getElementById(`main${re}`);
    remov.remove();
}
