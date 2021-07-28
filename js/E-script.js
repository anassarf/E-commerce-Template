let productImage = document.getElementById('product-imaged');  
let activeImage = productImage.querySelector('.active');
let imageList = document.getElementById('image-list');
let productImages = imageList.querySelectorAll('.imgSrc');
function addNewSrc(e) {
	activeImage.src = productImages[e - 1].src;
}


//************************ Sizes **************************//

document.getElementById('range-picker').addEventListener('click', function(e) {
	var sizeList = document.getElementById('range-picker').children;
	for (var i = 0; i <= sizeList.length - 1; i++) {
	  console.log(sizeList[i].classList);
	  if (sizeList[i].classList.contains('active')) {
		sizeList[i].classList.remove('active');
	  }
	}
	e.target.classList.add('active');
  })

  //************************ Colors **************************//

document.getElementById('color-a').addEventListener('click', function() {
	document.getElementById('color-overlay').style.transform = 'translateX(12.5px)';
	// document.getElementById('highlight-overlay').style.opacity = '1';
	// document.getElementById('highlight-overlay-mobile').style.opacity = '1';
	document.getElementById('color-name').innerHTML = "BLACK / 050";
  
  
   
  })
  
  document.getElementById('color-b').addEventListener('click', function() {
	document.getElementById('color-overlay').style.transform = 'translateX(45px)';
	// document.getElementById('background-element').style.backgroundColor = '#457';
	// document.getElementById('highlight-overlay').style.opacity = '0';
	// document.getElementById('highlight-overlay-mobile').style.opacity = '0';
	document.getElementById('color-name').innerHTML = "GREY / 052";
  
   
  })
  document.getElementById('color-c').addEventListener('click', function() {
	document.getElementById('color-overlay').style.transform = 'translateX(79.5px)';
	// document.getElementById('highlight-overlay').style.opacity = '0';
	// document.getElementById('highlight-overlay-mobile').style.opacity = '0';
	document.getElementById('color-name').innerHTML = "BLUE / 050";
  
	
  })
  document.getElementById('color-d').addEventListener('click', function() {
	document.getElementById('color-overlay').style.transform = 'translateX(114px)';
	// document.getElementById('highlight-overlay').style.opacity = '0';
	// document.getElementById('highlight-overlay-mobile').style.opacity = '0';
	document.getElementById('color-name').innerHTML = "PURPLE / 050";
  
	
  })
  document.getElementById('color-e').addEventListener('click', function() {
	document.getElementById('color-overlay').style.transform = 'translateX(148.5px)';
	// document.getElementById('highlight-overlay').style.opacity = '0';
	// document.getElementById('highlight-overlay-mobile').style.opacity = '0';
	document.getElementById('color-name').innerHTML = "GREEN / 050";
  
	
  })
  document.getElementById('color-f').addEventListener('click', function() {
	document.getElementById('color-overlay').style.transform = 'translateX(183px)';
	// document.getElementById('highlight-overlay').style.opacity = '0';
	// document.getElementById('highlight-overlay-mobile').style.opacity = '0';
	document.getElementById('color-name').innerHTML = "GOLD / 050";
  
	
  })



//   card Visa 

var cardDrop = document.getElementById('card-dropdown');
var activeDropdown;
cardDrop.addEventListener('click',function(){
  var node;
  for (var i = 0; i < this.childNodes.length-1; i++)
    node = this.childNodes[i];
    if (node.className === 'dropdown-select') {
      node.classList.add('visible');
       activeDropdown = node; 
    };
})

window.onclick = function(e) {
  console.log(e.target.tagName)
  console.log('dropdown');
  console.log(activeDropdown)
  if (e.target.tagName === 'LI' && activeDropdown){
    if (e.target.innerHTML === 'Master Card') {
      document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/2vbqk5lcpi7hjoc/MasterCard_Logo.svg.png';
          activeDropdown.classList.remove('visible');
      activeDropdown = null;
      e.target.innerHTML = document.getElementById('current-card').innerHTML;
      document.getElementById('current-card').innerHTML = 'Master Card';
    }
    else if (e.target.innerHTML === 'American Express') {
         document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/f5hyn6u05ktql8d/amex-icon-6902.png';
          activeDropdown.classList.remove('visible');
      activeDropdown = null;
      e.target.innerHTML = document.getElementById('current-card').innerHTML;
      document.getElementById('current-card').innerHTML = 'American Express';      
    }
    else if (e.target.innerHTML === 'Visa') {
         document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png';
          activeDropdown.classList.remove('visible');
      activeDropdown = null;
      e.target.innerHTML = document.getElementById('current-card').innerHTML;
      document.getElementById('current-card').innerHTML = 'Visa';
    }
  }
  else if (e.target.className !== 'dropdown-btn' && activeDropdown) {
    activeDropdown.classList.remove('visible');
    activeDropdown = null;
  }
}
