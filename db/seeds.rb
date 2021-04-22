# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#

books = Book.create([
    {
        name: "Moby Dick",
        image_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327940656l/153747.jpg"
    },
    {
        name: "Monte Cristo",
        image_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1611834134l/7126.jpg"
    },
    {
        name: "Minecraft the Island",
        image_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1504003184l/32736561._SY475_.jpg"
    },
    {
        name: "Sapiens: A Brief History of Humankind ",
        image_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1595674533l/23692271._SY475_.jpg"
    }
])

reviews = Review.create([
    {
        title: 'Great Book',
        description: 'One of the first books I read as child, completely love it',
        score:5,
        book: books.first
    },
    {
        title: 'Awesome!',
        description: 'This should be used in the history classes all over the world!',
        score:5,
        book: books.last
    }
])