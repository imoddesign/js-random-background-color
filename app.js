const app = document.getElementById('app');
const colorDiv = document.createElement('h1');
const button = document.createElement('button');

button.innerText = "Change Background";
button.addEventListener('click', randomBackgroundColor);
app.appendChild(button);

// type 1
// function randomBackgroundColor() {
//   const result = [];
//   for(i = 0; i < 255; i++) {
//     result.push(i);
//   }
//   const red = Math.floor(Math.random(result) * result.length)
//   const green = Math.floor(Math.random(result) * result.length)
//   const blue = Math.floor(Math.random(result) * result.length)
  
//   app.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
//   app.appendChild(colorDiv).innerText = `rgb(${red}, ${green}, ${blue})`;
// }

// type 2
const hexCodes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
function randomBackgroundColor() {
  let hex = '#';
  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * hexCodes.length);
    hex += hexCodes[index];
  }
  app.appendChild(colorDiv).textContent = hex;
  app.style.backgroundColor = hex;
}

randomBackgroundColor();