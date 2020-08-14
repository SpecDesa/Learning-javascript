// showMessage("Changes..");

// show the title
// showMessage("Title...");
// let price = 149.99;
/*
    Detail complex logic...
    Some algorithm...

*/

// let person = {
//     firstname: 'John',
//     lastname: 'Adams'
// }
// showMessage(person.firstname);

// (price < 10) ? showMessage('Less expensive than ' + price) : showMessage('More expensive than' + price);

// for (let i = 0; i< 5; i++){
//     console.log(i);
// }

// let myFunction = function /*can have a name here for easier debugging, but cant be used */ loggingFunction (){
//     console.log('Here is a message');
// }

// myFunction();

// changePercentOff(100);

// let header = document.getElementById('message');

// // header.style.color = 'red';  
// // header.onclick = function (){header.style.color = 'yellow';}
// header.onclick = (() => {header.style.color = 'yellow';});
// header.style.color = 'red';  

// const button = document.getElementById('see-review');

// button.addEventListener('click', function(){
//     console.log('click');
// });

const button = document.getElementById('see-review');
button.addEventListener('click', function() {
    const review = document.getElementById('review');

    if(review.classList.contains('d-none')){
    review.classList.remove('d-none');
    button.textContent = 'Close review';
    }
    else{
        review.classList.add('d-none');
        button.textContent = 'See review';
    }
})