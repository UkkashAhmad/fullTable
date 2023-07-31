let print = document.getElementById('printPlace');
function Tables() {
    print.innerHTML='';
    let number=document.getElementById('Number').value;

    for (let index = 1; index < 11; index++) {
        print.innerHTML+= `${number}  x  ${index}  =  ${index*number} <br>`
        
    }
}