var countBs = function(my_string) {
    var i = 0;
    var count = 0;
    while(i < my_string.length) {
        if(my_string[i] == "B")
            count++;
        i++;
    }
    return count;
};

var countChar = function(my_string, char_checked) {
    var i = 0;
    var count = 0;
    while(i < my_string.length) {
        if(my_string[i] == char_checked)
            count++;
        i++;
    }
    return count;
};

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));