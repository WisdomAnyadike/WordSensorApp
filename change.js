
let input = document.getElementById('input')
let h1 = document.getElementById('h1')


function changeWords(){ 
 let inputsValue =  input.value
 let value = inputsValue.toLowerCase()
let firstSentence = value.replaceAll('fuck' , '***').replaceAll('shit' , '****')

h1.innerHTML = firstSentence
}

let refresh = ()=> {
    h1.innerHTML = ''
    input.value = ''
}
 
 







