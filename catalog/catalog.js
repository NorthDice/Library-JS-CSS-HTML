const books = [
    { title: "1984", author: "Джордж Орвелл", genre: "Дистопия",image: "https://tse1.mm.bing.net/th?id=OIP.0IhDKlJncPvDYh_DqC-1NAHaHa&pid=Api&P=0&w=300&h=300" },
    { title: "Убити пересмішника", author: "Харпер Лі",genre: "Класика", image: "https://tse4.mm.bing.net/th?id=OIP.UuEgvy1P_tQHpz6HYdJg8wAAAA&pid=Api&P=0&h=180" },
    { title: "Мобі Дік", author: "Герман Мелвілл", genre: "Пригоди",image: "https://tse2.mm.bing.net/th?id=OIP.0j55nroOcaaTKtBEW8_a5wHaLR&pid=Api&P=0&h=180" },
    { title: "Гордість і упередження", author: "Джейн Остін",genre: "Романтика", image: "https://tse4.mm.bing.net/th?id=OIP.2iOb6us1rzV0gGGX-z0wvgAAAA&pid=Api&P=0&h=180" },
    { title: "Війна і мир", author: "Лев Толстой",genre: "Історичний роман", image: "https://tse3.mm.bing.net/th?id=OIP.j79qLOxH04FUbVUsnnwSUgHaK_&pid=Api&P=0&h=180" },
    { title: "Старий і море", author: "Ернест Хемінгуей", genre: "Класика", image: "https://tse3.mm.bing.net/th?id=OIP.VXIQz4rQSlCWAXkWe-bwvQHaLX&pid=Api&P=0&h=180" },
    { title: "Великий Гетсбі", author: "Френсіс Скотт Фіцджеральд",genre: "Класика", image: "https://tse1.mm.bing.net/th?id=OIP.oy20QBRMiYxzu2l4GM9HCQHaLo&pid=Api&P=0&h=180" },
    { title: "451 градус за Фаренгейтом", author: "Рей Бредбері",genre: "Фантастика", image: "https://tse1.mm.bing.net/th?id=OIP.duIcLh00bz01z5nBRteubgHaLo&pid=Api&P=0&h=180" },
    { title: "Людина в пошуках сенсу", author: "Віктор Франкл", genre: "Психологія",image: "https://tse2.mm.bing.net/th?id=OIP.Dp1ZozaInKfE7qDh0nSMnAHaLE&pid=Api&P=0&h=180" },
    { title: "Дівчина з татуюванням дракона", author: "Стіг Ларссон",genre: "Детектив", image: "https://tse4.mm.bing.net/th?id=OIP.BqwVj3M4f8xLUYhcC8hAZQHaJ2&pid=Api&P=0&h=180" },
    { title: "Код да Вінчі", author: "Ден Браун", genre: "Детектив",image: "https://tse2.mm.bing.net/th?id=OIP.HWEFdJqaMHaEsOZGGpatlAAAAA&pid=Api&P=0&h=180" },
    { title: "Гаррі Поттер і філософський камінь", author: "Джоан Роулінг",genre: "Роман", image: "https://tse4.mm.bing.net/th?id=OIP.k_R1LuEPnHWlJoVxfMN-TAHaLB&pid=Api&P=0&h=180" },
    { title: "Злочин і кара", author: "Федір Достоєвський", genre: "Детектив",image: "https://tse1.mm.bing.net/th?id=OIP.OBydb4G_J49bWbkS4SYZsAAAAA&pid=Api&P=0&h=180" },
    { title: "Над прірвою в житі", author: "Джером Д. Селінджер",genre: "Роман", image: "https://tse2.mm.bing.net/th?id=OIP.mEs8v7IG0z1N2RtUvnTW1wAAAA&pid=Api&P=0&h=180" },
    { title: "Три товариші", author: "Еріх Марія Ремарк", genre: "Пригоди",image: "https://tse3.mm.bing.net/th?id=OIP.FP5EGjM6v3WoaD3qtCaBMAAAAA&pid=Api&P=0&h=180" },
    { title: "Скотний двір", author: "Джордж Орвелл", genre: "Класика",image: "https://tse4.mm.bing.net/th?id=OIP.DIs8emPaHK-477nBdHC9wQHaLo&pid=Api&P=0&h=180" },
    { title: "По ту сторону добра і зла", author: "Фрідріх Ніцше",genre: "Класика", image: "https://tse2.mm.bing.net/th?id=OIP.VqeibpVP7sW8tKvh7Dt9KAHaLe&pid=Api&P=0&h=180" },
    { title: "Алхімік", author: "Пауло Коельо", genre: "Роман",image: "https://tse1.mm.bing.net/th?id=OIP.4wFW1rHoNSFRnQJ2Vl5eyQHaLI&pid=Api&P=0&h=180" },
    { title: "Крихітка син до батька прийшов", author: "Корній Чуковський",genre: "Роман", image: "https://tse4.mm.bing.net/th?id=OIP.6AT-d2-Qgki48nhxC7qKqAAAAA&pid=Api&P=0&h=180" },
    { title: "Брати Карамазови", author: "Федір Достоєвський",genre: "Класика", image: "https://tse2.mm.bing.net/th?id=OIP.COWMzDiuI4oaQBVdm7eVywHaIx&pid=Api&P=0&h=180" },
    { title: "Бійцівський клуб", author: "Чак Паланік",genre: "Класика", image: "https://tse4.mm.bing.net/th?id=OIP.iMx6YqnpcArVtlt2ZZ--vgAAAA&pid=Api&P=0&h=180" },
    { title: "Сиддхартха", author: "Герман Гессе", genre: "Роман",image: "https://tse4.mm.bing.net/th?id=OIP.UrmppDIQ3vMhzUH0SJls9gHaKv&pid=Api&P=0&h=180" },
    { title: "Чайка на ім'я Джонатан Лівінгстон", author: "Річард Бах",genre: "Роман", image: "https://tse4.mm.bing.net/th?id=OIP.hu49DEPYAgN63c9ZT2aSsAAAAA&pid=Api&P=0&h=180" },
    { title: "Тінь гори", author: "Грегорі Девід Робертс",genre: "Роман", image: "https://tse4.mm.bing.net/th?id=OIP.3IoGAAZqNiNIpNhXw4_GBwAAAA&pid=Api&P=0&h=180" }
];


const bookList = document.getElementById("book-list");

books.forEach(book => {
    const card = document.createElement("div");
    card.className = "book-card";
    card.innerHTML = `
        <img src="${book.image}" alt="${book.title}">
        <h3>${book.title}</h3>
        <p>${book.author}</p>
        <p><strong>Жанр:</strong> ${book.genre}</p>
    `;
    bookList.appendChild(card);
});

const genreFilter = document.getElementById("genre-filter");


function displayBooks(filteredBooks) {
    bookList.innerHTML = ""; 
    filteredBooks.forEach(book => {
        const card = document.createElement("div");
        card.className = "book-card";
        card.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>${book.author}</p>
            <p><strong>Жанр:</strong> ${book.genre}</p>
        `;
        bookList.appendChild(card);
    });
}


genreFilter.addEventListener("change", () => {
    const selectedGenre = genreFilter.value;

    if (selectedGenre === "all") {
        
        displayBooks(books);
    } else {
        
        const filteredBooks = books.filter(book => book.genre === selectedGenre);
        displayBooks(filteredBooks);
    }
});

displayBooks(books);
