function colorGenerator(){
    let alphabet = ['0', '1','2', '3','4', '5', '6','7','8','9','a', 'b', 'c', 'd', 'f']
    let hash = '#';
    for(let i=0; i<6; i++){
        let num = Math.floor(Math.random()*15)
        let num2 = alphabet[num]
         hash+= num2;
    }
    document.getElementById('container').style.backgroundColor = hash;
    document.getElementById('output').innerHTML = hash;
}