// let eggs=[1,2]



//     function g() {
//         return new Promise((res, rej) => {
//           if (eggs.length == 0) {
//             res({
//                 data: 'Error',
//                 code: 404
//             });
//           } else {
//             rej({
//                 data: 'Response',
//                 code: 204

//             });
//           }
//         });
//       }

// function gPromise(callbackFn) {
//     callbackFn().then((result) => {
//       console.log(result);
//     }).catch((err) => {
//       console.log(err);
//     });
//   }

//   gPromise(g);



// async function gAsync(callBackFn){
//     let res;
//     try{
//         res=await callBackFn();
//     }
//     catch(err){
//         console.log(err);

//     }
//     console.log(res)
// }

// gAsync(g);




import { BASE_URL } from "./constant.js";
const table = document.querySelector(".table")
let tbody = document.querySelector('.table tbody')
let searchInp = document.querySelector('.searchInp')
let supplier = null;








let loader = document.querySelector('.loader');
async function getData(endpoint) {
    try {
        loader.classList.remove('d-none')
        const response = await fetch(`${BASE_URL}/${endpoint}`);
        const data = await response.json();
        supplier = data;


        loader.classList.add('d-none')
        console.log(data)
        renderTable(data)
    } catch (error) {

    }
    finally {
        // loadingOverlay.classlist.add("d-none")
    }

}
getData('suppliers');


searchInp.addEventListener("keyup", () => {
    let filterData = [...supplier];

    renderTable(filterData.filter((a) => {
        return a.companyName.toLowerCase().includes(searchInp.value.trim().toLowerCase())
    }))
});


function renderTable(data) {
    table.innerHTML = '';
    data.forEach(element => {
        table.innerHTML += `
    <tr>
    <td scope="row">${element.id}</td>
    <td scope="row">${element.companyName}</td>
    <td scope="row">${element.address.street}</td>
    <td scope="row">${element.address.phone}</td>
    <td scope="row">${element.address.city},${element.address.country}</td>
  
    <td><button class ="btn btn-primary" data-id = ${element.id}">Edit</button></td>
    <td><button class ="btn btn-success" data-id = ${element.id}">Delete</button></td>
    <td><a class ="btn btn-warning" data-id = ${element.id} href="details.html?id=${element.id}">Details</a></td>
    </tr>`
    });
}