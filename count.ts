function letterCount (word : string, letter : string){
    let count = 0; // Khoi tao gia tri 

    for (let l of word){
        if(l === letter){
            count ++;
        }

    }
    return count;

}

console.log(letterCount("Hiiii","i"));
