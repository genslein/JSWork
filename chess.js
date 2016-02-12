var length = 12;
var final_str = "";
var spc = " ";
var pnd = "#";

for(var i = 0; i < length; i++){
  var temp = "";
  if(i % 2 == 0)
    temp += spc;
  else
    temp += pnd;

  for(var j = 0; j < length; j++){
    if(temp.charAt(temp.length - 1) == spc)
      temp += pnd;
    else
      temp += spc;
  }
  final_str += temp + "\n";
}

console.log(final_str);
