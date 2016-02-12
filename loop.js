var str = "#";
for(var i = 1; i < 8; i++) {
  console.log(str);
  str += "#";
}

var abc = "abc";
console.log(abc.length);

var buzz = "Buzz";
var fizz = "Fizz";

for(var i = 1; i < 101; i++) {
    var temp = i.toString();
    if(i % 3 == 0)
      temp = fizz;

    if(i % 5 == 0 && i % 3 == 0)
      temp += buzz;
    else if (i % 5 == 0) {
      temp = buzz;
    }
    console.log(temp)
}
