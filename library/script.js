// For login functionality
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple authentication check
    if (username === "Raj_Rajput" && password === "12345678") {
        window.location.href = "home.html";
    } else {
        alert("Invalid username or password!");
    }
});

// For managing books
let totalBooks = 0;

document.getElementById('bookForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;

    const bookList = document.getElementById('bookList');
    const li = document.createElement('li');
    li.textContent = `${title} by ${author}`;
    bookList.appendChild(li);

    // Update total books
    totalBooks++;
    document.getElementById('totalBooks').textContent = totalBooks;
    document.getElementById('availableBooks').textContent = totalBooks;

    // Clear the input fields
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
});

// For contact form submission
document.getElementById('contactForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}! Your message has been sent.`);
    
    // Clear the input fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});
