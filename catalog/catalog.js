const books = [
    { title: "1984", author: "Джордж Орвелл", image: "https://tse1.mm.bing.net/th?id=OIP.0IhDKlJncPvDYh_DqC-1NAHaHa&pid=Api&P=0&w=300&h=300" },
    { title: "Убити пересмішника", author: "Харпер Лі", image: "https://tse4.mm.bing.net/th?id=OIP.UuEgvy1P_tQHpz6HYdJg8wAAAA&pid=Api&P=0&h=180" },
    { title: "Мобі Дік", author: "Герман Мелвілл", image: "https://tse2.mm.bing.net/th?id=OIP.0j55nroOcaaTKtBEW8_a5wHaLR&pid=Api&P=0&h=180" },
    { title: "Гордість і упередження", author: "Джейн Остін", image: "https://tse4.mm.bing.net/th?id=OIP.2iOb6us1rzV0gGGX-z0wvgAAAA&pid=Api&P=0&h=180" },
    { title: "Війна і мир", author: "Лев Толстой", image: "https://tse3.mm.bing.net/th?id=OIP.j79qLOxH04FUbVUsnnwSUgHaK_&pid=Api&P=0&h=180" },
    { title: "Старий і море", author: "Ернест Хемінгуей", image: "https://tse3.mm.bing.net/th?id=OIP.VXIQz4rQSlCWAXkWe-bwvQHaLX&pid=Api&P=0&h=180" },
    { title: "Великий Гетсбі", author: "Френсіс Скотт Фіцджеральд", image: "https://tse1.mm.bing.net/th?id=OIP.oy20QBRMiYxzu2l4GM9HCQHaLo&pid=Api&P=0&h=180" },
    { title: "451 градус за Фаренгейтом", author: "Рей Бредбері", image: "https://tse1.mm.bing.net/th?id=OIP.duIcLh00bz01z5nBRteubgHaLo&pid=Api&P=0&h=180" },
    { title: "Людина в пошуках сенсу", author: "Віктор Франкл", image: "https://tse2.mm.bing.net/th?id=OIP.Dp1ZozaInKfE7qDh0nSMnAHaLE&pid=Api&P=0&h=180" },
    { title: "Дівчина з татуюванням дракона", author: "Стіг Ларссон", image: "https://tse4.mm.bing.net/th?id=OIP.BqwVj3M4f8xLUYhcC8hAZQHaJ2&pid=Api&P=0&h=180" },
    { title: "Код да Вінчі", author: "Ден Браун", image: "https://tse2.mm.bing.net/th?id=OIP.HWEFdJqaMHaEsOZGGpatlAAAAA&pid=Api&P=0&h=180" },
    { title: "Гаррі Поттер і філософський камінь", author: "Джоан Роулінг", image: "https://tse4.mm.bing.net/th?id=OIP.k_R1LuEPnHWlJoVxfMN-TAHaLB&pid=Api&P=0&h=180" },
    { title: "Злочин і кара", author: "Федір Достоєвський", image: "https://tse1.mm.bing.net/th?id=OIP.OBydb4G_J49bWbkS4SYZsAAAAA&pid=Api&P=0&h=180" },
    { title: "Над прірвою в житі", author: "Джером Д. Селінджер", image: "https://tse2.mm.bing.net/th?id=OIP.mEs8v7IG0z1N2RtUvnTW1wAAAA&pid=Api&P=0&h=180" },
    { title: "Три товариші", author: "Еріх Марія Ремарк", image: "https://tse3.mm.bing.net/th?id=OIP.FP5EGjM6v3WoaD3qtCaBMAAAAA&pid=Api&P=0&h=180" },
    { title: "Скотний двір", author: "Джордж Орвелл", image: "https://tse4.mm.bing.net/th?id=OIP.DIs8emPaHK-477nBdHC9wQHaLo&pid=Api&P=0&h=180" },
    { title: "По ту сторону добра і зла", author: "Фрідріх Ніцше", image: "https://tse2.mm.bing.net/th?id=OIP.VqeibpVP7sW8tKvh7Dt9KAHaLe&pid=Api&P=0&h=180" },
    { title: "Алхімік", author: "Пауло Коельо", image: "https://tse1.mm.bing.net/th?id=OIP.4wFW1rHoNSFRnQJ2Vl5eyQHaLI&pid=Api&P=0&h=180" },
    { title: "Крихітка син до батька прийшов", author: "Корній Чуковський", image: "https://tse4.mm.bing.net/th?id=OIP.6AT-d2-Qgki48nhxC7qKqAAAAA&pid=Api&P=0&h=180" },
    { title: "Брати Карамазови", author: "Федір Достоєвський", image: "https://tse2.mm.bing.net/th?id=OIP.COWMzDiuI4oaQBVdm7eVywHaIx&pid=Api&P=0&h=180" },
    { title: "Бійцівський клуб", author: "Чак Паланік", image: "https://tse4.mm.bing.net/th?id=OIP.iMx6YqnpcArVtlt2ZZ--vgAAAA&pid=Api&P=0&h=180" },
    { title: "Сиддхартха", author: "Герман Гессе", image: "https://tse4.mm.bing.net/th?id=OIP.UrmppDIQ3vMhzUH0SJls9gHaKv&pid=Api&P=0&h=180" },
    { title: "Чайка на ім'я Джонатан Лівінгстон", author: "Річард Бах", image: "https://tse4.mm.bing.net/th?id=OIP.hu49DEPYAgN63c9ZT2aSsAAAAA&pid=Api&P=0&h=180" },
    { title: "Тінь гори", author: "Грегорі Девід Робертс", image: "https://tse4.mm.bing.net/th?id=OIP.3IoGAAZqNiNIpNhXw4_GBwAAAA&pid=Api&P=0&h=180" }
];


const bookList = document.getElementById("book-list");

books.forEach(book => {
    const card = document.createElement("div");
    card.className = "book-card";
    card.innerHTML = `
        <img src="${book.image}" alt="${book.title}">
        <h3>${book.title}</h3>
        <p>${book.author}</p>
    `;
    bookList.appendChild(card);
});