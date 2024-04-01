// // #Volume of a Box
// Create a function that takes an object argument sizes (contains width, length, height keys)
//  and returns the multiplication sizes of the box.
// Don't forget to return the result.

// function volumeOfBox(obj) {
//     return obj.width * obj.length * obj.height;
// }
// console.log(volumeOfBox({ width: 2, length: 5, height: 1 }))



// function getCapitalizeWord(str) {
//     str = str.split(" ");

//     for (i = 0; i < str.length; i++) {
//         str[i] = str[i][0].toUpperCase() + str[i].slice(1);
//     }

//     return str.join(" ");
// }

// console.log(getCapitalizeWord(""));


// # string daxilində olan saitlərin sayi

// function countOfVowel(str){
//     let count=0;
//     // let  arr =["a","i","u","o","e"];
//     for (let i = 0; i < str.length; i++){
//         if(str[i]==="a" || str[i]==="i" || str[i]==="o" || str[i]==="u"|| str[i]==="e"){
//             count++
//         }
//     }

// return count;

// }
// console.log(countOfVowel("aydan"))

// #cumle daxilində ən uzun sozu tapan function

// function longWord(str) {
//     let max = 0;
//     let s = "";
//     str = str.split(" ");
//     for (let i = 0; i < str.length; i++) {
//         if (str[i].length > max) {
//             max = str[i].length;
//             s = str[i];
//         }
//     }
//     return s;
// }

// console.log(longWord("a aa aaa aaaa aaaaa"));

// daxil edilən string daxilində sadecə unique simvollari saxlayan function yazin
// function selectOnUniqueChars(str) {
//     let result=[];
//     for (let i = 0; i < str.length; i++) {
//         if(str.indexOf(str[i]===str.lastIndexOf(str[i]))){
//             result.push(str[i]);
//         }
//     }
//    return result;
    
// }
// console.log(selectOnUniqueChars("abbbcccdddddeeee"))


// # anagram strings

// function anagram(str1, str2) {

// str1=str1.split("").sort();
// str2=str2.split("").sort();

// return str1.toString()===str2.toString();

    
// }
// console.log(anagram("aysel","ldsya"))

// # array daxilində sadecə number olanlari yeni bir arraya yigin

function findAllNums(arr){
let res=[];
for (let i = 0; i < arr.length; i++) {
    arr[i]*1===arr[i] && res.push(arr[i])

}
return res;
}
console.log(findAllNums([6,"r",6,7,9,"g","r"]))


  
