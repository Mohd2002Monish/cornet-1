CoreNet React Project
Welcome to the CoreNet React project! This application is developed as an assignment given by CoreNet. It's a web application designed to manage products with functionalities like adding, editing, and deleting products.

Description
This React project utilizes several third-party libraries to enhance its functionality and user experience. It employs React Router DOM for routing, Redux and Redux Thunk for global state management, and Chakra UI for UI components.

The project also includes a small backend server to support the frontend. You can find the backend server code on GitHub here.

Installation
To run this project locally on your machine, follow these steps:

Clone this repository to your local machine:

bash
Copy code
git clone https://github.com/Mohd2002Monish/cornet-1.git
Navigate to the project directory:

bash
Copy code
cd cornet-1
Install dependencies using npm or yarn:

bash
Copy code
npm install

# or

yarn install
Start the development server:

bash
Copy code
npm start

# or

yarn start
Usage
Once the development server is running, you can access the application in your web browser at http://localhost:3000.

Routes
/: Home page.
/add-products: Add a new product.
/product/:productId: Edit an existing product with the given productId.
Functionality
The application allows you to perform the following operations:

Add Products: Navigate to /add-products to add a new product.
Edit Products: Navigate to /product/:productId to edit an existing product by providing its productId.
Delete Products: Functionality to delete products is integrated into the edit page or through additional UI components as per your implementation.
Technologies Used
React.js: Front-end library for building user interfaces.
React Router DOM: Library for routing in React applications.
Redux: State management library for managing application state.
Redux Thunk: Middleware for asynchronous Redux actions.
Chakra UI: Component library for React applications.
