async function fetchItems() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        return data.books;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

async function displayItems(searchQuery = '') {
    const itemsList = document.getElementById('searchResult');
    const items = await fetchItems();

    itemsList.innerHTML = '';

    const filteredItems = items.filter(item => {
    const bookTitle = item.book.toLowerCase();
    return bookTitle.includes(searchQuery.toLowerCase());
    });

    const addBookForm = document.getElementById('addBookForm');
    addBookForm.addEventListener('submit', addBook);

    filteredItems.map(item => {
    const listItem = document.createElement('li');
    const description = document.createElement('span');
    const addBtn = document.createElement('button');
    const removeBtn = document.createElement('button');

    listItem.style.backgroundImage = `url(${item.image})`;
    description.classList.add('hide');
    removeBtn.classList.add('removebtn');
    removeBtn.innerHTML = `<i class="bi bi-trash"></i>`;
    addBtn.classList.add('addBtn');
    addBtn.innerHTML = `Add to wishlist <i class="bi bi-heart"></i>`;
        description.innerHTML = `
        <h2>${item.book}</h2> <hr>
        ${item.desc}<hr>
        ${item.genre} - ${item.Year} <hr>`;
    description.appendChild(removeBtn);

    listItem.addEventListener('click', () => {
        description.classList.toggle('hide');
    });

    removeBtn.addEventListener('click', () => {
        listItem.classList.toggle('hide');
        description.classList.toggle('hide');
    });

    itemsList.appendChild(listItem);
    itemsList.appendChild(description);
    });

    //Add books
function addBook(event) {
    event.preventDefault();
    const titleInput = document.getElementById('name');
    const genreInput = document.getElementById('genre');
    const yearInput = document.getElementById('year');
    const urlInput = document.getElementById('url');
    const aboutInput = document.getElementById('about');

    const title = titleInput.value.trim();
    const genre = genreInput.value.trim();
    const year = yearInput.value.trim();
    const url = urlInput.value.trim();
    const about = aboutInput.value.trim();
    
    const addeddescription = document.createElement('span');
    const addBtn = document.createElement('button');
    const removeBtn = document.createElement('button');
    const addedlistItem = document.createElement('li');

    if (title !== '' && genre !== '' && year !== '' && url !== '' && about !== '') {
    const bookList = document.getElementById('searchResult');
    

    addedlistItem.style.backgroundImage = `url(${urlInput.value})`;
    addeddescription.classList.add('hide');
    removeBtn.classList.add('removebtn');
    removeBtn.innerHTML = `<i class="bi bi-trash"></i>`;
    addBtn.classList.add('addBtn');
    addBtn.innerHTML = `Add to wishlist <i class="bi bi-heart"></i>`;
    addeddescription.innerHTML = `
        <h2>${titleInput.value}</h2> <hr>
        ${aboutInput.value}<hr>
        ${genreInput.value} - ${yearInput.value} <hr>`;
        addeddescription.appendChild(removeBtn);

        addedlistItem.addEventListener('click', () => {
            addeddescription.classList.toggle('hide');
    });

    removeBtn.addEventListener('click', () => {
        addedlistItem.classList.toggle('hide');
        addeddescription.classList.toggle('hide');
    });

    itemsList.appendChild(addedlistItem);
    itemsList.appendChild(addeddescription)

      // Lägg till nya boken i listan
    bookList.appendChild(addeddescription);

      // Rensa input efter tillagd bok
        titleInput.value = '';
        genreInput.value = '';
        yearInput.value = '';
        urlInput.value = '';
        aboutInput.value = '';
    } else {
        alert('Please enter the correct information.');
    }
}
}

document.addEventListener('DOMContentLoaded', () => {
    displayItems(); // Display all items initially

    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (event) => {
      displayItems(event.target.value); // Filter items based on the search query
    });
});



