function letterCount(word, letter) {
    var count = 0; // Khoi tao gia tri 
    for (var _i = 0, word_1 = word; _i < word_1.length; _i++) {
        var l = word_1[_i];
        if (l === letter) {
            count++;
        }
    }
    return count;
}
console.log(letterCount("Hiiii", "i"));
