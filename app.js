const app = document.getElementById('app');
const colorDiv = document.createElement('h1');

function randomBackgroundColor() {
  const result = [];
  for(i = 0; i < 255; i++) {
    result.push(i);
  }
  const red = Math.floor(Math.random(result) * result.length)
  const green = Math.floor(Math.random(result) * result.length)
  const blue = Math.floor(Math.random(result) * result.length)
  
  app.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  app.appendChild(colorDiv).innerText = `rgb(${red}, ${green}, ${blue})`;
}

randomBackgroundColor();