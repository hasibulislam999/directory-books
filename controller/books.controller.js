/**
 * Title: Books controller
 * Description: Integrate majority of books controller
 * Author: Hasibul Islam
 * Date: 05/09/2022
 */

// Fetch all books
const fetchAllBooks = (req, res) => {
    res.status(200).json({
        success: true,
        message: "successfully fetched all books",
        data: "N/A"
    })
}

// Insert a new book
const insertABook = (req, res) => {
    res.status(200).json({
        success: true,
        message: "successfully insert a new book",
        data: "N/A"
    })
}

// Fetch a require book
const fetchABook = (req, res) => {
    res.status(200).json({
        success: true,
        message: "successfully fetched the require book",
        data: "N/A"
    })
}

// Update a require book
const updateABook = (req, res) => {
    res.status(200).json({
        success: true,
        message: "successfully update the require book",
        data: "N/A"
    })
}

// Delete a require book
const deleteABook = (req, res) => {
    res.status(200).json({
        success: true,
        message: "successfully delete the require book",
        data: "N/A"
    })
}

module.exports = {
    getAllBooks: fetchAllBooks,
    insertABook,
    fetchABook,
    updateABook,
    deleteABook
};