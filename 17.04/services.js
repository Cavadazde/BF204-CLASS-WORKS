import { BASE_URL } from "./constant.js";

export async function deleteDataById(id) {
    try {
        const response = await axios.delete(`${BASE_URL}/suppliers/${id}`);
        return response;
    } catch (error) {
        console.log(error.message)

    }

}

//add
const endpoint = "/suppliers"
export async function postCategory(newCategory){
    let response = null;
    await axios.post(BASE_URL+endpoint, newCategory).then((res)=>{
        response = res;
    }).catch((err)=>{
        response = err;
    });

    return response;
}
















// export async function editDataById(id) {
//     try {
//         let obj = {
//             supplier: null,
//             error: null
//         }
//         await axios.get(`${BASE_URL}/suppliers/${id}`)
//             .then((res) => {
//                 obj.category = res.data;
//             }).catch((err) => {
//                 obj.error = err;
//             });

//         return obj;
//     }
// }

