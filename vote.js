'use strict'
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
var newArray=[];
var viewArr = [ ];

 var left =document.getElementById('leftImage');
 
 var center = document.getElementById('midImage');
 var right = document.getElementById('rightImage');
 var arrObj=[];

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
var leftAt ='';
var rightAt='';
var centerAt='';

function render(){
    

    var leftProduct = arrObj[randomFun(0,arrObj.length-1)];
    var centerProduct = arrObj[randomFun(0,arrObj.length-1)];
    var rightProduct = arrObj[randomFun(0,arrObj.length-1)];
    while(newArray.includes(leftProduct.name) || newArray.includes(centerProduct.name) || newArray.includes(rightProduct.name) || leftProduct.imgPath === centerProduct.imgPath || centerProduct.imgPath === rightProduct.imgPath || leftProduct.imgPath === rightProduct.imgPath){
        console.log('repeated');
        var leftProduct = arrObj[randomFun(0,arrObj.length-1)];
        var centerProduct = arrObj[randomFun(0,arrObj.length-1)];
        var rightProduct = arrObj[randomFun(0,arrObj.length-1)];
     }
   
       
    
    
    
    
    
    newArray=[];
    
    
    newArray.push(leftProduct.name);
    newArray.push(centerProduct.name);
    newArray.push(rightProduct.name);

    left.setAttribute('src',leftProduct.imgPath);
    left.setAttribute('alt',leftProduct.name);
    left.setAttribute('title',leftProduct.name);
   
    

    right.setAttribute('src',rightProduct.imgPath);
    right.setAttribute('alt',rightProduct.name);
    right.setAttribute('title',rightProduct.name);

    center.setAttribute('src',centerProduct.imgPath);
    center.setAttribute('alt',centerProduct.name);
    center.setAttribute('title',centerProduct.name);
    
    
    
  
    for (var l = 0; l < assets.length; l++){
        
        if (left.alt === arrObj[l].name){
            arrObj[l].viewed=arrObj[l].viewed+1;
        }
        if (center.alt === arrObj[l].name){
            arrObj[l].viewed=arrObj[l].viewed+1;        }
        if (right.alt === arrObj[l].name){
            arrObj[l].viewed=arrObj[l].viewed+1;        }
        
          
        
        
    }
    for (var i=0;i< assets.length ; i++){
        viewArr[i] = arrObj[i].viewed; 
             
    
      }  
    

}render();
var click = document.getElementsByClassName('imgs');
for(var i=0;i<click.length;i++){
    click[i].addEventListener('click',handle);
}
var totalClick=0;
function handle(event){
     
    
    if(totalClick <= 25 ){
        
        for(var i=0;i<arrObj.length;i++){
          if(event.target.alt === arrObj[i].name ){
            arrObj[i].clicked++;
           
        }
    
    }
    totalClick++;
    for (var i=0;i< arrObj.length ; i++){
        voteArr[i] = arrObj[i].clicked; 
     }
    render();
        
        

    }
    else{
        render2();
        for(var i=0;i<click.length;i++){
            click[i].removeEventListener('click',handle);
        }
        
        
        }
        
       

}

 var voteArr = [ ];
 
 
 

function render2(){
    // var information = document.getElementById('info');
    
    // var list = document.createElement('ul');
    // //console.log(list);
    // information.appendChild(list);
    // for (var i=0;i<assets.length;i++){
    //     var listItem = document.createElement('li');
    //     list.appendChild(listItem);
        
    //     listItem.textContent=`${arrObj[i].name} had ${arrObj[i].clicked} votes and was shown ${arrObj[i].viewed} times  `;

    // }
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: assets,
        datasets: [{
            label: '# of Votes',
            data:voteArr,
            
            backgroundColor: 
                
                'rgba(54, 162, 235, 0.2)'
                
            ,
            borderColor:  'rgba(75, 192, 192, 1)',
               
            
            borderWidth: 1
        },
        {
            label: '# of views',
            data:viewArr,
            
            backgroundColor: 
                
            'rgba(75, 192, 240, 1)'
                
            ,
            borderColor: 'rgba(54, 162, 235, 0.2)',
               
            
            borderWidth: 1
        }
        
    
    ],
        
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
    
}


