
const btnn = document.getElementById('btn');



const randomColor = () =>{
    let val = '0123456789ABCDEF'
    let cons = '#';
    for(let i= 0;i<6 ;i++){
        //So, in simpler terms, the expression val[Math.floor(Math.random() * 16)] generates a random 'index' between 0 and 15 and then uses that index to pick a random character from the val string, which represents hexadecimal digits. This is how you're building a random hexadecimal color code character by character.
        cons = cons + val[Math.floor((Math.random()*16))]
    }
        return cons;

}

function changeRandomColor(){
    document.body.style.backgroundColor = randomColor();
}

btnn.addEventListener('click',changeRandomColor);
