function checkSnt (so: number){
    // So nguyen to: Lon hon or bang hai va chia het cho chinh no 
    if(so < 2) return false;

    for (let i = 2; i <= Math.sqrt(so); i++) {
    if (so % i === 0) {
      return false;
    }
  }
    return true;

}

console.log(checkSnt(3));
