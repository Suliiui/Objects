const book = {
    Title: "JavaScript: The Definitive Guide",
    Author: "David Flanagan",
    PublishedYear: 2020,
    Genre: "Programming",
}

console.log(book.Title)

book.pageCount= "1096"

console.log(book)

book.ISBN = "978-1491952023"

console.log(book)

book.PublishedYear = 2021

console.log(book)

book.Author = ['David Flanagan', 'Another Author']

console.log(book)

book.reviews = [
    {
    reviewer: "Book Critic",
     comment: "A comprehensive guide to JavaScript.",
   },
   {
    reviewer: "Book Lover",
    comment: "Very easy and helpful guide to learn JavaScript",
   },
   {
    reviewer: "Game of Thrones enthusiast",
    comment: "Helped me create my own website on my own",
   }
]

console.log(book)
