//HTML Elments
const form = document.querySelector("form");
const contentRow =  document.querySelector(".content-piramide")


//Funtions
const idSquare=(quantity, i) =>{
    id = (quantity * (quantity - 1) / 2) + i ;
  return id
}

const creatSquare= (quantity) =>{
  let contentSquare = '';
  for (let i = 1; i <= quantity; i++) {
    id = idSquare(quantity , i);
    contentSquare+= `
    <div class="square"> ${id} </div>
    `;
  }
  return contentSquare;
}

const creatRow = (quantity) =>{
  let contentRow = '';
  for (let i = 1; i <= quantity; i++) {
    contentRow += `<div class="row">`;
    square = creatSquare(i);
    contentRow += square;
    contentRow += `</div>`;
  } 
  return contentRow;
}

const creatPiramide = (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  contentRow.innerHTML = creatRow(formData.get('quantity'));
}

form.addEventListener("submit", creatPiramide);