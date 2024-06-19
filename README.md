# 💊 openFDA Medication Search App

This project is a web application that allows users to search for medications registered in the US using the OpenFDA API. The application is built using Next.js and leverages server-side rendering for enhanced performance. React Query is used for efficient data fetching and state management.

## ✨ Features

- **Medication Search Page**: Users can type in their search query and click the search button to fetch data from the OpenFDA API. Results are paginated, with a limit of 20 medications per page. Users can navigate through pages to view more medications.
- **Medication Details Page**: Clicking on a medication card redirects the user to a detailed view page. This page fetches and displays comprehensive information about the selected medication.

## 🛠️ Technologies Used

- **Next.js**: A React-based framework that provides server-side rendering and static site generation.
- **React Query**: Used alongside Axios for efficient data fetching and state management.
- **Material-UI**: A popular React UI framework for building responsive and visually appealing components.
- **Axios**: For making HTTP requests to the OpenFDA API.

## 🗂️ Project Structure

Here is the project structure for better understanding and navigation:

```
src/
├── app
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── medication
│   │   └── [medicationId]
│   │       └── page.tsx
│   ├── page.tsx
│   └── pattern.jpeg
├── components
│   ├── FetchingMedicationError.tsx
│   ├── MedicationCard.tsx
│   ├── MedicationDetailsAccordion.tsx
│   ├── MedicationDetails.tsx
│   ├── MedicationsList.tsx
│   └── SearchBar.tsx
├── config
│   └── constants.ts
├── hooks
│   ├── useDebounce.ts
│   └── useSearchMedicationsQuery.ts
├── lib
│   ├── queryClient.ts
│   └── theme.ts
├── services
│   └── api.ts
└── types
    └── index.d.ts
```

## 🧩 How It Works

### 🔍 Search Medication Page

- **Search Input**: Users can enter a medication name or related keyword in the search input field.
- **Search Button**: On clicking the search button, the app fetches data from the OpenFDA API based on the user's query.
- **Pagination**: The results are paginated, with a limit of 20 items per page. Users can navigate to other pages using the pagination controls.
- **Medication Cards**: Each search result is displayed as a clickable card. Clicking a card redirects the user to the medication details page.

### 📄 Medication Details Page

- **Server-Side Rendering**: The medication details page uses Next.js's server-side rendering to fetch and display data based on the medication ID obtained from the URL parameters.
- **Details Display**: The page displays comprehensive information about the medication, including product data elements, indications and usage, dosage and administration, warnings, and more.
- **Error Handling**: If an error occurs during data fetching, an error message is displayed to the user.

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/RahimGuerfi/openfda-medication-search-app.git
   ```
2. Navigate to the project directory:
   ```sh
   cd openfda-medication-search-app
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```

### Running the Application

To run the development server:

```sh
npm run dev
```

or

```sh
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To create a production build:

```sh
npm run build
```

or

```sh
yarn build
```

To start the production server:

```sh
npm start
```

or

```sh
yarn start
```

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for more details.

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/)
- [React Query](https://react-query.tanstack.com/)
- [Material-UI](https://material-ui.com/)
- [OpenFDA API](https://open.fda.gov/apis/)
