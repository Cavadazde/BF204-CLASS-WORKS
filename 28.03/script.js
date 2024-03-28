// Task0-1
let age = Number(window.prompt());
if(age>=65)
{
    console.log("Pensiya düşür")
}
else{
    console.log("Pensiya düşmür")

}

Task 2

let age = Number(window.prompt());
if(n%2==0){
    console.log("Eded cütdür")
}
else{
     console.log("Eded tekdir")
}

Task 3

let month = window.prompt("months").toLocaleLowerCase();

switch (month) {
  case "yanvar":
  case "dekabr":
  case "Fevral":
    console.log("Qis aylari");
    break;

  case "Mart":
  case "Aprel":
  case "May":
    console.log("Yaz aylari");
    break;

  case "Iyun":
  case "Iyul":
  case "Avqust":
    console.log("Yay aylari");
    break;

  case "Sentyabr":
  case "Oktyabr":
  case "Noyabr":
    console.log("Payiz aylari");
    break;
}


Task 4:

Daxil edilən müsbət ədədin 3 və 5 ədədinə eyni anda bölünüb-bölünmədiyini tapan proqram yazın.

let n = window.prompt("").toLocaleLowerCase();
if(n%3==0 && n%5==0){
    console.log("True")}
    else{
        console.log("False");
    }

Task 5:

Daxil edilən müsbət ədədin 2-yə tam bölünüb-bölünmədiyini tapan proqram yazın. Əgər tam bölünürsə, consolda bölündü yazılsın,tam bölünmürsə qalıq hesablanıb yazılsın.

let n = window.prompt("");
if(n%2==0){
    console.log("Bölünür");
}
else{
    console.log("Bölünmür")
}

Task 6:

Daxil edilən 2 ədədin hasilinin müsbət yoxsa mənfi ədəd olmasını  yazın.
let a = +window.prompt("");
let b = +window.prompt("");
if(a*b>0){
    console.log("Musbetdir");
}
else if(a*b<0){
    console.log("Menfidir");
}
else{
   console.log("Sifirdir");
}

Task 7:

Daxil edilən müsbət ədədin 1-100 arasında olub-olmadığını tapan proqram yazın.

let a = +window.prompt("");
if(1<a && a<100){
    console.log("Vardir");

}
else{
    console.log("Yoxdur");
}

Task 8:

 Daxil edilən 3 müsbət ədədin ən böyüyünü tapan proqram yazın.
 let a = +window.prompt("");
 let b = +window.prompt("");
 let c = +window.prompt("");

 if(a>b && a>c){
    console.log("a boyukdur");

 }
 else if(b>a && b>c){
    console.log("b boyukdur");

 }
 else{
    console.log("c boyukdur");
 }

Task 10:

Tələbənin daxil etdiyi bala görə A B C D E F qiymətlərindən hansını aldığını müəyyənləşdirrən proqram yazın. 90 və yuxarı üçün "A", 80-89 üçün "B", 70-79 üçün "C", 60-69 üçün "D", 59 və daha aşağı qiymətlər üçün "F". Daxil edilən rəqəm müsbət, sıfırdan böyük və 100-dən kiçik olmalıdır.
  let a = +window.prompt("");
  let  b;
  if(a<51){

    b="F"

  }
  else if(a >= 51 && a<=60){
    b="E"

  }

  else if(a >= 61 && a<=70){
    b="D"

  }
  else if(a >= 71 && a<=80){
    b="C"

  }
  else if(a >= 81 && a<=90){
    b="B"

  }

  else if(a >= 91 && a<=100){
    b="A"

  }
  else{
    b="Yoxdur"
  }

console.log(b);

Task 13:

İstifadəçidən 3 dəyər alın bunlardan ikisi rəqəm, biri isə riyazi əməl olsun.Riyazi əmələ görə rəqəmlər üzərində əməliyyat aparsın. Riyazi əməllər toplama,çıxma,vurma və bölmə olacaq.Bu dörd əməldən başqası daxil edilərsə console "Zəhmət olmasa düzgün əməl daxil edin yazılsın." Taskı switch-case ilə yazın.
let a = +window.prompt("");
let b = window.prompt("");
let c = +window.prompt("");

switch (b) {
  case "+":
    console.log(a + c);
    break;

  case "-":
    console.log(a - c);
    break;

  case "*":
    console.log(a * c);
    break;

  case "/":
    console.log(a / c);
    break;

    default:
        console.log("Zəhmət olmasa düzgün əməl daxil edin yazılsın.")
}

Task-1;
for(let i=1; i<=100; i++){
  if(i%2==0)
 console.log(i)
}

taks-3

let temp = Number(window.prompt());
let i;
for (i = 1; i <= temp; i++) {
  if (temp % i === 0) {
    console.log(i);
  }
}

Task 4

let a = Number(window.prompt());
let b = Number(window.prompt());
let c = Number(window.prompt());

if (
  a ** 2 + b ** 2 == c ** 2 ||
  a ** 2 + c ** 2 == b ** 2 ||
  b ** 2 + c ** 2 == a ** 2
) {
  console.log("Duzbucaqli  ucbucaqdir");
} else {
  console.log("Duzbucaqli ucbucaq deyil");
}

task5

let n = window.prompt();//625
let a, b, c;
a=n%10;
b=parseInt(n/10)%10;
c=parseInt(n/100)%10 ;
console.log(a,b,c)

task6
let a = Number(window.prompt());
let b = Number(window.prompt());
let c = Number(window.prompt());

if( a==b && b==c && a==c ){
    console.log("berabertereflidr")
}
else{
    console.log("beraberterefli deyil")
}

task7

let a = Number(window.prompt());
let b = Number(window.prompt());
let c = Number(window.prompt());

if( a==b || b==c ||
    a==c 
     ){
        console.log("beraberyanlidir");
    }
    else{
        console.log("beraberyanli  deyil");
    }


task8

let a = Number(window.prompt());
let b = Number(window.prompt());
let c = Number(window.prompt());

if( a+c>b || b+a>c ||
    a+b>c 
     ){
        console.log("Ucbucaqdir");
    }
    else{
        console.log("ucbucaq  deyil");
    }
