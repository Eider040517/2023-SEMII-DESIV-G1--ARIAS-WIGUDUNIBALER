//HTML Elments
const form = document.querySelector("form");
const containerSquare =  document.querySelector(".content-square")


//Funtions
const idSquare=(n) =>{
  const fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

const creatSquare= (quantity) =>{
  let contentSquare = '';
  id = idSquare(quantity);
  for (let i = 0; i < quantity; i++) {
    contentSquare+= `
    <div class="square">
        <span class="material-symbols-outlined iClose">close</span>
        ${id[i]}
      </div>
    `;
  }
  return contentSquare;
}


const generateSquare = (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  containerSquare.innerHTML = creatSquare(formData.get('quantity'));
}

const delectSquare = (event) =>{
  event.preventDefault();
  if (event.target.tagName === "SPAN") {
    event.target.parentElement.remove(); 
  }
}

containerSquare.addEventListener("click",delectSquare)
form.addEventListener("submit", generateSquare);