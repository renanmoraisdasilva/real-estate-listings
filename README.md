# Estate Listing Web Application

## Overview

This web application is built using Vue.js to view and manage estate listings. It provides features for browsing estate details, filtering listings, saving properties, and contacting agents.

## Architecture

1. **Vue Components**: The main components include:

   - **HomeView**: Displays a list of estate listings with filtering options.
   - **EstateDetailView**: Displays detailed information about a specific estate.
   - **Layout**, **Header**, **Footer**
   - **EstateGallery**: Displays a grid of estate cards.
   - **EstateFilters**: Allows users to filter estates based on various criteria.
   - **EstateCard**: Displays a summary of an estate's details.
   - **SnackBar**: Provides feedback to the user.
   - **Modal**: A reusable modal component.

2. **Vue Router**: I used Vue Router for navigation with Dynamic Routing using estate ID as parameter in the URL.

3. **Pinia Store**: I used the Pinia state management library. There are several stores in the application:

   - **EstateStore**: Manages the estate data, filters, and saved properties.
   - **ModalStore**: Manages the state of modals for displaying detailed estate information.
   - **PaginationStore**: Manages pagination for the estate listings.
   - **SnackbarStore**: Handles the display of snackbar messages.

4. **Vuetify**: I used Vuetify for creating some components of the user interface.

5. **Utility Functions**: I created utility functions for formatting currency and dates.

6. **Maska**: Maska is a library used for creating mask patterns. I used it to format and validate phone numbers.

7. **TypeScript**: I used TypeScript for type safety.

8. **Data Storage**: I use LocalStorage to store and manage saved properties.

9. **Pagination**: I included a pagination feature. It is managed by the `PaginationStore` to control the number of listings displayed per page.

10. **CORS**: Since the provided JSON data endpoint faced CORS restrictions, I uploaded the data as a blob to my Azure account so that the frontend application could access the data when hosted on Azure Web App. 
URL: https://estatedatarenan.blob.core.windows.net/estate-data/estate-data.json

## Usage

To run the application, follow these steps:

1. Clone the repository.
2. Install dependencies using a package manager like npm or yarn.
3. Run the development server to launch the application.

```bash
npm install
npm run dev
```
