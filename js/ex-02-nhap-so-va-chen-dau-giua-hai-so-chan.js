//Insert dashes (-) between even numbers
//Them dau (-) giua 2 so chan trong mot chuoi so

var a = prompt('Type random number a:'); // Yeu cau nguoi dung nhap chuoi so bat ky
var b = a.toString(); //Chuyen doi chuoi so vua nhap thanh mang
var result = [b[0]]; //Bat dau mang o vi tri dau tien (vi tri 0)

for (i=0; i< b.length - 1 ; i++) {
    if(b[i] % 2 === 0 && b[i+1] % 2 === 0) {
        result.push('-', b[i]);
    }else{
        result.push(b[i]);
    }
} document.write(result.join(''));

//Hoi tai sao no chi in ra so dau tien va so chan