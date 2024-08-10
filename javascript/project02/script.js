const form = document.querySelector("form")
const button = document.querySelector('button')

form.addEventListener('submit', function(e) {
    e.preventDefault() // so that after click on calculate data will not push to link or any server

    const height = document.querySelector('#ht').value // used number in html else use parseInt() function to convert string to number 
    const weight = document.querySelector('#wt').value
    const result = document.querySelector('#results')

    if(height <= 0 || weight <=0 ||height === ''||weight === ''){
        result.innerHTML= `Enter valid number`
    }
    else{
        const BMI = (weight / ((height*height)/10000)).toFixed(2)
        button.innerHTML = `${BMI}`
        button.style.borderRadius = '45px';
    }
    
})