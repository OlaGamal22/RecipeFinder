# Recipe Application

## Overview

This application is a Recipe App developed using Angular. It allows users to browse through a collection of recipes, view recipe details, mark favorites, and search for specific recipes by keywords.

## Features

- **Recipe Listing:** Display a list of recipes retrieved from an API.
- **Recipe Details:** View detailed information about a specific recipe.
- **Favorite Recipes:** Allow users to mark recipes as favorites.
- **Search Functionality:** Enable users to search for recipes by keywords.

## Application Structure

### Components

1. **RecipesComponent:**
   - Displays a list of recipes.
   - Allows users to mark recipes as favorites and view recipe details.
   - Provides search functionality to filter recipes.

2. **RecipeDetailsComponent:**
   - Shows detailed information about a specific recipe.
   - Allows users to mark/unmark a recipe as a favorite.

### Services

1. **RecipeApiService:**
   - Handles communication with the recipe API to fetch recipes, perform searches, and filter recipes.

2. **RouteService:**
   - Keeps track of the previous route to provide contextual information for navigation.

### Styling

- **Bootstrap:** Used Bootstrap for styling components, grid layout, and some utility classes.

## Decisions & Design Choices

- **Angular Framework:** Chose Angular due to its robustness, component-based architecture, and ease of handling complex applications.
- **Routing:** Utilized Angular Router for navigation between recipe lists, details, and favorites.
- **LocalStorage:** Stored favorite recipes in LocalStorage for persistence between sessions.
- **Responsive Design:** Ensured the application is responsive across various devices using Bootstrap grid layout and responsive components.

## How to Run

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Run the application: `ng serve`.

## Improvements & Future Work

1. **Unit Testing:** Implement comprehensive unit tests for components and services.
2. **Additional Features:** Add user authentication, user-specific favorite lists, or user profiles.
