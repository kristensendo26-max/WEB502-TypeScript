function checkSnt (so: number){
    // So nguyen to: Lon hon hai va khong chia het cho chinh no 
    if(so < 2) return false;

    for (let i = 2; i <= Math.sqrt(so); i++) {
    if (so % i === 0) {
      return false; // Nếu chia hết thì không phải số nguyên tố
    }
  }
    return true;

}

console.log(checkSnt(1));
