let arr = [
    {
        name: "test",
        key: 1,
    },
    {
        name: "task",
        key: 2,
    },
    {
        name: "tanqo",
        key: 3,
    },
    {
        name: "like",
        key: 4,
    },
    {
        name: "task",
        key: 5,
    },
    {
        name: "trust",
        key: 6,
    },
    {
        name: "test",
        key: 7,
    },
    {
        name: "last",
        key: 8,
    },
    {
        name: "tanqo",
        key: 9,
    },
    {
        name: "elephant",
        key: 10,
    },
    {
        name: "love",
        key: 11,
    },
    {
        name: "small",
        key: 12,
    },
    {
        name: "little",
        key: 13,
    },
];


// 1) "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin (filter)
// const res = arr.filter((item)=>item.name.toLocaleLowerCase().startsWith("t") );
// console.log(res)


// 2) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin (forEach)

// let res = 0;
// arr.forEach((item) => {
//     if (item.name.toLocaleLowerCase().startsWith("t") && item.name.toLocaleLowerCase().endsWith("t")) {
// res++
//     }
// });
// console.log(res);

// 3) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin

// let sum = 0;
// arr.forEach((item) => {
//     if (item.name.toLocaleLowerCase().startsWith("t") && item.name.toLocaleLowerCase().endsWith("t")) {
//         sum+=item.key
//     }
// });
// console.log(sum)


// 4) "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
// arr.forEach((item) => {
//         if (item.name.toLocaleLowerCase().endsWith("e")) {
//             item.name="SuperDev"

//         }
// });
// console.log(arr);

// 5) "name"-i en uzun olan obyekti tapin
// 6) "name"-i en uzun olan obyektin key'ni tapin
// 7)  "name"-i en uzun olan obyektin indexin kvadratini hesablayin


// let sortArrName=[...arr]
// sortArrName.sort((a,b)=>{
//     return a.name.length-b.name.length

// })
// console.log(sortArrName[sortArrName.length-1].name)
// console.log(sortArrName[sortArrName.length-1].key)
// console.log(arr.indexOf(sortArrName[sortArrName.length-1])**2)



// 8) "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin. (filter)

// console.log(arr.filter((item)=>item.name.length===4));

// 9)  en boyuk "key" - i olan obyektin "name"-i ni tapin
// let newArray=[...arr];
// newArray.sort((a,b)=> b.key-a.key);
// console.log(newArray[0]);

// 10) terkibinde 2 'l' (el) herfi olan obyekt(ler)in index(ler)ini tapin.opopppp00opo000op