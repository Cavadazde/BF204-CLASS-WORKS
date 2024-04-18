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
import { deleteDataById } from "./services.js";
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
  
    <td><button class ="btn btn-primary edit-btn" data-id = ${element.id}">Edit</button></td>
    <td><button class ="btn btn-success delete-btn" data-id=${element.id}>Delete</button></td>
    <td><a class ="btn btn-warning" data-id = ${element.id} href="details.html?id=${element.id}">Details</a></td>
    </tr>`

    //delete button
    const deleteBtns=document.querySelectorAll(".delete-btn");
    deleteBtns.forEach((btn) => {
        btn.addEventListener("click",function(){
            const id =this.getAttribute("data-id");
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
              }).then((result) => {
                if (result.isConfirmed) {
                  deleteDataById(element.id);
                  this.closest("tr").remove()
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                  });
                }
              });
        })

    });
    });


    // edit button
}

