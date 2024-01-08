let buttons = document.getElementsByClassName('panda-btn-buy-now');
for ( btn of buttons ) {
    // addded event listener
    btn.addEventListener('click', function(event){
        // change button text
        event.target.innerText = 'Added to card';        
    })
   
}


// Submit condition

// enable condition
document.getElementById('exampleInputEmail1').addEventListener('keyup', function(event){
    let fieldData = event.target.value;
    let submitButton = document.getElementById('submitButton');
    // enable conditions
    if ( fieldData.includes('@') && fieldData.includes('.') && (fieldData.includes('com') || fieldData.includes('net') || fieldData.includes('org') ) ) {
        submitButton.removeAttribute('disabled');
    } else {
        
        submitButton.setAttribute('disabled', true);
    }
})



// image changing in categories

document.getElementById('cat1').addEventListener('mouseover', function(){
    let image = document.querySelector('img#image1')
    image.src = 'images/categories/shoes.png';
})
document.getElementById('cat1').addEventListener('mouseleave', function(){
    let image = document.querySelector('img#image1')
    image.src = 'images/categories/watch.png';
})



document.getElementById('cat2').addEventListener('mouseover', function(){
    let image = document.querySelector('img#image2')
    image.src = 'images/categories/watch.png';
})
document.getElementById('cat2').addEventListener('mouseleave', function(){
    let image = document.querySelector('img#image2')
    image.src = 'images/categories/bag.png';
})



document.getElementById('cat3').addEventListener('mouseover', function(){
    let image = document.querySelector('img#image3')
    image.src = 'images/categories/watch.png';
})
document.getElementById('cat3').addEventListener('mouseleave', function(){
    let image = document.querySelector('img#image3')
    image.src = 'images/categories/shoes.png';
})




// background changing in footer

document.getElementById('subscribe').addEventListener('dblclick', function(){
    this.style.backgroundColor = 'lightblue';
})











