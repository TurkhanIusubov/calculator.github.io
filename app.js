// --- SELECT ---
const textDiv = document.querySelector('.text')
const btn = document.querySelectorAll('.btn')
const clear_btn =  document.querySelector('.clear')
const delete_btn =  document.querySelector('.delete')
const modul_btn =  document.querySelector('.modul')
const divide_btn =  document.querySelector('.divide')
const subtraction = document.querySelector('.subtraction')
const multiplication_btn =  document.querySelector('.multiplication')
const adition_btn =  document.querySelector('.adition')
const point_btn =  document.querySelector('.point')
const equal_btn = document.querySelector('.equal')

// --- EVENTS ---
btn.forEach(btn => btn.addEventListener('click', btn_function))
clear_btn.addEventListener('click', clearAll)
delete_btn.addEventListener('click', deleteFunction)
modul_btn.addEventListener('click', modulFunction)
divide_btn.addEventListener('click', divideFunction)
subtraction.addEventListener('click', subtractionFunction)
multiplication_btn.addEventListener('click', multiFunction)
adition_btn.addEventListener('click', aditionFunction)
point_btn.addEventListener('click', pointFunction)
equal_btn.addEventListener('click', equalFunction)

// --- FUNCTIONS ---
function x(){
    return textDiv.textContent
}

function btn_function(e){
    let e_btn = e.target.textContent
    if(textDiv.textContent === '0' || x() === 'NaN' || x() === '-Infinity' || x() === 'Infinity'){
        textDiv.textContent = e_btn
    } else{
        textDiv.textContent += e_btn
    }
}

function clearAll(){
    textDiv.textContent = 0
}

function deleteFunction(){
    if(x() === 'NaN' || x() === '-Infinity' || x() === 'Infinity'){
        textDiv.textContent = 0
    }
    if(x().length != 1){
        textDiv.textContent = x().substring(0, x().length - 1)
    } else{
        textDiv.textContent = 0
    }
}

function modulFunction(){
    const mod = '%'
    if(!x().includes(mod) && x()[x().length-1] !== '.' && x()[x().length-1] !== '/' && x()[x().length-1] !== '+' && x()[x().length-1] !== '*'){
        textDiv.textContent += mod
    }
}

function divideFunction(){
    if(x()[x().length-1] !== '/' && x()[x().length-1] !== '.' && x()[x().length-1] !== '%' && x()[x().length-1] !== '-' && x()[x().length-1] !== '*' && x()[x().length-1] !== '+'){
        textDiv.textContent += '/'
    }
}

function subtractionFunction(){
    if(x()[x().length-1] !== '-' && x()[x().length-1] !== '.' && x()[x().length-1] !== '%' && x()[x().length-1] !== '/' && x()[x().length-1] !== '*' && x()[x().length-1] !== '+'){
        textDiv.textContent += '-'
    }
}

function multiFunction(){
    if(x()[x().length-1] !== '*' && x()[x().length-1] !== '.' && x()[x().length-1] !== '%' && x()[x().length-1] !== '/' && x()[x().length-1] !== '-' && x()[x().length-1] !== '+'){
        textDiv.textContent += '*'
    }
}

function aditionFunction(){
    if(x()[x().length-1] !== '+' && x()[x().length-1] !== '.' && x()[x().length-1] !== '%' && x()[x().length-1] !== '/' && x()[x().length-1] !== '-' && x()[x().length-1] !== '*'){
        textDiv.textContent += '+'
    }
}

function pointFunction(){
    if(x()[x().length-1] !== '/' && x()[x().length-1] !== '.' && x()[x().length-1] !== '(' && x()[x().length-1] !== ')' && x()[x().length-1] !== '%' && x()[x().length-1] !== '-' && x()[x().length-1] !== '*' && x()[x().length-1] !== '+'){
        textDiv.textContent += '.'
    }
}

function equalFunction(){
    textDiv.textContent = eval(textDiv.textContent)
}
