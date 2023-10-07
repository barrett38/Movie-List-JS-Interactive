// https://ed.devmountain.com/materials/fah11/exercises/js-interactivity/
console.log(`Hello from world`);
const message = document.querySelector('#message');

function deleteMovie(ev) {
    ev.target.parentNode.remove();
    message.textContent = `${ev.target.parentNode.firstChild.textContent} deleted!`;
}

function crossOffMovie(ev) {
    ev.target.classList.toggle('checked');
    if (ev.target.classList.contains('checked')) {
        message.textContent = `${ev.target.textContent} watched!`;
    } else {
        message.textContent = `${ev.target.textContent} added back!`;
    }
}

function addMovie(ev) {
    ev.preventDefault();
    let inputField = document.querySelector('input');
    let movie = document.createElement('li');
    let movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value;
    movie.appendChild(movieTitle);
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', deleteMovie);
    movie.appendChild(deleteBtn);
    document.querySelector('ul').appendChild(movie);
}
document.querySelector('form').addEventListener('submit', addMovie);
