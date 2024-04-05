// const body = document.body;
// const card = document.createElement("div");
// card.classList.add("card");
// card.style.width = "18rem"
// card.style.overflow = "hidden"


// const img = document.createElement("img");
// img.classList.add("card-img-top");
// img.setAttribute("src", "./big..jpeg");
// img.style.width="100%"


// const cardBody = document.createElement("div");
// card.classList.add("card-body");
// const h5 = document.createElement("h5");
// h5.classList.add("card-title");
// h5.textContent = "Card title";
// h5.style.marginLeft="5px"
// const p = document.createElement("p")
// p.classList.add("card-text");
// p.textContent = "Some quick example text to build on the card title and make up thebulk of the card's content."
// p.style.marginLeft="5px"


// const a = document.createElement("a");
// a.setAttribute("href","#");
// a.setAttribute("class","btn btn-primary");
// a.textContent="Go somewhere";
// a.style.marginLeft="5px";
// a.style.border='1px solid blue';
// a.style.borderRadius="10px";
// a.style.textDecoration="none"
// a.style.backgroundColor="blue"
// a.style.color="white"
// a.style.padding="5px"



// cardBody.append(h5,p,a)
// card.append(img,cardBody)
// body.append(card)

// const students = ["xeyal", "aysel", "lale", "sebuhi", "nicat", "emil"]
// const body = document.body;
// const wrapper = document.querySelector(".wrapper");
const btn = document.querySelector(".button");
btn.addEventListener('click', function () {
    let random1 = parseInt(Math.random() * 256);
    let random2 = parseInt(Math.random() * 256);
    let random3 = parseInt(Math.random() * 256);
    const str = `rgb(${random1},${random2},${random3})`;

    document.body.style.backgroundColor = str;
});




// const studentList = document.createElement("ul");
// students.forEach((item) => {
//     const liElem = document.createElement("li");
//     liElem.textContent = item;
//     studentList.appendChild(liElem);
//     liElem.addEventListener("click", function () {
//         Ma
//         this.remove();
//     })

// })




// wrapper.appendChild(studentList);
// body.append(wrapper);

