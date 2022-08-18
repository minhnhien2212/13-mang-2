/*var string = prompt('Nhap dong chu bat ky:');
var upper = 'abcdefghijklmnopqrstuvwxyz';
var lower = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var result = [];

for (var i = 0; i< string.length; i++) {
    if(UPPER.indexOf(str[i]) !== -1) {
        result.push(str[i].toLowerCase());
    }
    else if(LOWER.indexOf(str[i]) !== -1){
        result.push(str[i].toUpperCase());
    }
    else{
        result.push(str[i]);
    }
} document.write(result);*/

// var str = 'The Quick Brown Fox';
var string = prompt('Nhap mot chuoi ky tu');
var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LOWER = 'abcdefghijklmnopqrstuvwxyz';
var result = [];

for(var i=0; i<string.length; i++) {
    if(UPPER.indexOf(string[i]) !== -1) {
        result.push(string[i].toLowerCase());
    } else if(LOWER.indexOf(string[i]) !== -1) {
        result.push(string[i].toUpperCase());
    } else {
        result.push(string[i]);
    }
}
document.write(result.join(""));