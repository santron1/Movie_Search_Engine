# Movie App

## Overview

The Movie App is a React-based web application that allows users to explore popular movies, search for specific titles, and manage a list of their favorite movies. The app interacts with a movie database API to fetch and display movie information. Users can add movies to their favorites list, which is stored locally in the browser.Here is deployed link of project: https://movie-engine01.netlify.app/

## Features

- **Popular Movies**: View a list of popular movies fetched from an external API.
- **Search Functionality**: Search for movies using a search bar.
- **Favorites Management**: Add or remove movies from the favorites list, with the data saved in local storage.
- **Dynamic Navigation**: Navigate between the Home and Favorites pages using React Router.

## Components

### 1. `MovieCard`
- Displays individual movie details, including the poster, title, and release year.
- Users can toggle a movie's favorite status with a heart icon.

### 2. `NavBar`
- Provides navigation links to the Home and Favorites pages.

### 3. `Home`
- Contains the search form and displays a grid of movies based on the search results or popular movies.
- Handles loading states and displays error messages if the API fetch fails.

### 4. `Favorites`
- Displays a grid of favorite movies.
- Shows a message if no favorite movies have been added.

## Context

### `MovieContext`
- Manages the state of the favorite movies list.
- Provides methods to add and remove movies from favorites and check if a movie is already a favorite.

## API Services

### `api.js`
- **`getPopularMovies`**: Fetches a list of popular movies from the API.
- **`searchMovies`**: Fetches movies based on a search query.

## Environment Variables

- **`VITE_API_URL`**: Base URL of the movie API.
- **`VITE_API_KEY`**: API key to authenticate requests to the movie API.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd movie-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your API credentials:
   ```bash
   VITE_API_URL=https://api.themoviedb.org/3
   VITE_API_KEY=your_api_key_here
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

- Visit the Home page to see a list of popular movies.
- Use the search bar to find specific movies.
- Click the heart icon on a movie card to add or remove it from your favorites.
- Navigate to the Favorites page to view your saved movies.

## Styling

- CSS files are located in the `css` directory.
- The components are styled with custom CSS classes, ensuring a clean and responsive UI.

## Dependencies

- **React**: Library for building user interfaces.
- **React Router**: Library for routing in React applications.
- **React Icons**: Library for including icons in React components.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

- The Movie Database (TMDb) for providing the API used in the app.

---

Feel free to contribute to this project by submitting issues or pull requests. Happy coding!
