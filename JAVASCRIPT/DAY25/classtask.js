// You are building a simple application for a library. You need to implement a function called findBook that simulates finding a book by its title in the library's catalog. However, there are some special requirements:

// If the book with the specified title is found, the function should return the book's information as an object with properties: title, author, and availability.

// If the book is not found, the function should throw a custom error with the message: "Book not found in catalog."

// Regardless of whether the book is found or not, you need to ensure that a specific cleanup action, such as logging, always occurs after the function is executed.

// Write the findBook function that implements these requirements using a try-catch-finally block.

// Sample catalog of books
const catalog = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", availability: true },
    { title: "To Kill a Mockingbird", author: "Harper Lee", availability: false },
    { title: "1984", author: "George Orwell", availability: true },

  ];


// Custom error class for book not found
class BookNotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = 'BookNotFoundError';
    }
}

// Function to find a book by its title in the catalog
function findBook(title) {
    try {
        // Search for the book in the catalog
        const book = catalog.find(book => book.title === title);

        // If book is not found, throw custom error
        if (!book) {
            throw new BookNotFoundError("Book not found in catalog.");
        }

        // If book is found, return book information
        return {
            title: book.title,
            author: book.author,
            availability: book.availability
        };
    } catch (error) {
        // Catch and handle the custom error
        if (error instanceof BookNotFoundError) {
            console.error(error.message);
            throw error; // Re-throwing to ensure cleanup in finally block
        } else {
            // Handle any unexpected errors
            console.error("Unexpected error occurred:", error);
            throw error;
        }
    } finally {
        // Finally block ensures cleanup action (logging)
        console.log("Cleanup action after findBook function execution.");
    }
}

// Example usage:
try {
    console.log(findBook("1984"));
    console.log(findBook("To Kill a Mockingbird"));
    console.log(findBook("The Catcher in the Rye")); // This should throw BookNotFoundError
} catch (error) {
    console.error("Error caught in main block:", error.message);
}
