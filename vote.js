var assets=[
    'bag',
    'banana',
    'bathroom',
    'boots',
    'breakfast',
    'bubblegum',
    'chair',
    'cthulhu',
    'dog-duck',
    'dragon',
    'pen',
    'pet-sweep',
    'scissors',
    'shark',
    'sweep',
    'tauntaun',
    'unicorn',
    'usb',
    'water-can',
    'wine-glass'
]

 var left =document.getElementById('leftImage');
 var center = document.getElementById('midImage');
 var right = document.getElementById('rightImage');
 arrObj=[];

function products(name){
    this.clicked=0;
    this.viewed=0;
    this.name = name;
    this.imgPath= `assets/${name}.jpg`
    arrObj.push(this);
}
for(var i=0;i<assets.length;i++){
    new products(assets[i]);
    
}


function randomFun(min,max){
    var result = Math.floor(Math.random()*(max-min+1)-min);
    return result;
}
//render();
function render(){

    var leftProduct = arrObj[randomFun(0,arrObj.length-1)];
    var centerProduct = arrObj[randomFun(0,arrObj.length-1)];
    var rightProduct = arrObj[randomFun(0,arrObj.length-1)];
    while(leftProduct.imgPath === centerProduct.imgPath || centerProduct.imgPath === rightProduct.imgPath || leftProduct.imgPath === rightProduct.imgPath){
        var leftProduct = arrObj[randomFun(0,arrObj.length-1)];
        var centerProduct = arrObj[randomFun(0,arrObj.length-1)];
        var rightProduct = arrObj[randomFun(0,arrObj.length-1)];}

    left.setAttribute('src',leftProduct.imgPath);
    left.setAttribute('alt',leftProduct.name);
    left.setAttribute('title',leftProduct.name);

    right.setAttribute('src',rightProduct.imgPath);
    right.setAttribute('alt',rightProduct.name);
    right.setAttribute('title',rightProduct.name);

    center.setAttribute('src',centerProduct.imgPath);
    center.setAttribute('alt',centerProduct.name);
    center.setAttribute('title',centerProduct.name);
   // console.log('hi');
  
    for (var l = 0; l < assets.length; l++){
        
        if (left.alt === arrObj[l].name){
            arrObj[l].viewed=arrObj[l].viewed+1;
            console.log(arrObj[l].name);
            //console.log(assets[i].viewed);
        }
        if (center.alt === arrObj[l].name){
            arrObj[l].viewed=arrObj[l].viewed+1;        }
        if (right.alt === arrObj[l].name){
            arrObj[l].viewed=arrObj[l].viewed+1;        }
    }
    

}render();
var click = document.getElementsByClassName('imgs');
for(var i=0;i<click.length;i++){
    click[i].addEventListener('click',handle);
}
var totalClick=0;
function handle(event){
     
    
     //console.log(totalClick);
    if(totalClick <= 25 ){
        
        for(var i=0;i<arrObj.length;i++){
          if(event.target.alt === arrObj[i].name ){
            arrObj[i].clicked++;
            //console.log(arrObj[i].clicked)
            //arrObj[i].viewed++;
        }
    
    }
    totalClick++;
    render();
        
        

    }
    else{
        render2();
        //console.log(render2);
        for(var i=0;i<click.length;i++){
            click[i].removeEventListener('click',handle);
        }
        
        // left.remove();
        // right.remove();
        // center.remove();
        }
        
       

}


function render2(){
    var information = document.getElementById('info');
    
    var list = document.createElement('ul');
    console.log(list);
    information.appendChild(list);
    for (var i=0;i<assets.length;i++){
        var listItem = document.createElement('li');
        list.appendChild(listItem);
        
        listItem.textContent=`${arrObj[i].name} had ${arrObj[i].clicked} votes and was shown ${arrObj[i].viewed} times  `;

    }
    
}

//var information = document.getElementById('info');

