# Epicurean Eats API

Epicurean Eats API is a RESTful service designed to provide a comprehensive platform for food enthusiasts to explore, create, update, and delete recipes. Built with Express and MongoDB, it supports a wide range of operations related to managing culinary recipes, including listing all recipes, adding new ones, updating existing recipes, and removing them.

## Features

- List all recipes
- Add new recipes
- Update existing recipes
- Delete recipes
- Filter recipes based on cuisine, ingredients, or other criteria (future enhancement)

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (version 14.x or later)
- MongoDB (version 4.x or later)

### Installation

1. Clone the repository:
```
git clone https://github.com/yourusername/epicureaneats-api.git
```
2. Navigate to the project directory:
```
cd epicureanEatsApi
```
3. Install the dependencies:
```
npm install
```
4. Configure your environment variables:
- Copy the `.env.example` file to a new file named `.env`.
- Update the `DATABASE_URL` with your MongoDB connection string.
5. Start the server:
```
npm start
```

## Usage

### Accessing the API

- **Get All Recipes**
- `GET /api/recipes`
- **Add a New Recipe**
- `POST /api/recipes` with the recipe data in JSON format in the request body.
- **Update an Existing Recipe**
- `PUT /api/recipes/:id` with the updated recipe data in JSON format in the request body.
- **Delete a Recipe**
- `DELETE /api/recipes/:id`

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Node.js community
- Express.js documentation
- MongoDB documentation
