# TV-Maze

## Overview

This Vue.js application displays a list of popular TV shows and detailed information about each show. The application consists of two main pages:

1. **Show List Page** - Displays a grid of TV show cards.
2. **Show Detail Page** - Shows detailed information about a specific TV show.

## Project Structure

### Components

1. **`ShowList.vue`**

   - **Purpose**: Displays a grid of TV show cards.
   - **Features**:
     - Fetches and displays a list of TV shows.
     - Uses the `ShowCard` component to display each show.
     - Handles responsive design to adjust the grid layout for different screen sizes.

2. **`ShowCard.vue`**

   - **Purpose**: Represents an individual TV show card.
   - **Features**:
     - Displays show details like image, name, and genres.
     - Includes a button to view details of the show.
     - Emits an event to the parent component (`ShowList.vue`) when the button is clicked.

3. **`ShowDetail.vue`**
   - **Purpose**: Displays detailed information about a single TV show.
   - **Features**:
     - Fetches show details based on the ID from the route parameters.
     - Displays show image, name, genres, rating, premiere date, and summary.
     - Includes a back button to return to the main page.
     - Handles responsive design to ensure proper layout on mobile devices.

### Routing

- **`Vue Router`**: Manages navigation between the list and detail pages.
  - **Route for Show List**: `'/` - Displays the `ShowList.vue` component.
  - **Route for Show Detail**: `'/show/:id'` - Displays the `ShowDetail.vue` component, where `:id` is a placeholder for the show ID.

### Data Fetching

- **`ShowList.vue`**:

  - Fetches a list of TV shows from the TVMaze API (`https://api.tvmaze.com/shows`).
  - Displays the first 9 shows for the grid layout.

- **`ShowDetail.vue`**:
  - Fetches details of a specific TV show based on the show ID from the route parameters.
  - Retrieves data from the TVMaze API (`https://api.tvmaze.com/shows/:id`).

### Styles

- **Global Styles**: Basic global styling is applied, including font imports and layout adjustments.
- **Component-Specific Styles**: Each component has scoped styles to ensure proper layout and appearance:
  - `ShowList.vue`: Styles for the list container, title, and grid layout.
  - `ShowCard.vue`: Styles for individual show cards, including hover effects and button styles.
  - `ShowDetail.vue`: Styles for the detail view, including responsive design adjustments.

### Responsive Design

- **Media Queries**: Adjusts the layout for different screen sizes:
  - For tablets (max-width: 768px): Changes the grid layout to 2 columns.
  - For mobile phones (max-width: 480px): Changes the grid layout to a single column.

### Component Reusability

- **`ShowCard.vue`**: A reusable component for displaying individual show cards. This allows for better organization and maintenance of the code.

## Project Setup

To get started with the project, follow these steps:

### Install Dependencies

```bash
yarn install
```
