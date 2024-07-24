# Wellness Retreats

A responsive web page for a fictional wellness retreat platform. The page displays a list of available retreats, allowing users to filter them by date and type.

## Features

- Single-page application using React
- Responsive design for both desktop and mobile devices
- Display list of retreats with details: Image, Title, Description, Date, Location, and Price
- Filter retreats by date and type
- Search retreats by title
- Pagination for browsing retreats

## Mock Data

The application uses mock data for demonstration purposes. (https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats).

## APIs

- **Individual retreat data**: `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats/{id}`
- **Filter retreats by type**: `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?tag=meditation&page=1&limit=3`
- **Filter retreats by location and type**: `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?tag=meditation&location=$Pune&page=$1&limit=3`
- **Search retreats by title**: `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?search=Yoga&page=$1&limit=3`
- **Pagination**: `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=1&limit=3`

## Installation

1. **Clone the repository**:

   ```sh
   git clone https://github.com/Ayush-1315/shoonya-life-assignment.git
   cd wellness-retreats

2. **Install dependencies**:
    ```sh
    npm install

3. **Start development Server**:
    ```sh
    npm start