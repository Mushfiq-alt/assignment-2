Table of Contents
Prerequisites
Installation
Running the Application
Development Mode
Production Mode
Build and Run
Linting and Code Formatting
Prerequisites
Node.js (version 14 or higher)
npm (version 6 or higher)
TypeScript (version 5.5.3 or higher)
MongoDB (version 8.5.0 or higher)
Installation
Clone the repository: git clone https://github.com/your-username/first-project.git
Navigate to the project directory: cd first-project
Install dependencies: npm install
Running the Application
Development Mode
To run the application in development mode, use the following command:

npm run start:dev
		
This will start the application with ts-node-dev, which will transpile and run the code in development mode. The application will be available at http://localhost:3000.

Production Mode
To run the application in production mode, use the following command:

npm run start:prod
		
This will start the application with Nodemon, which will restart the server if there are any changes. The application will be available at http://localhost:3000.

Build and Run
To build the application and run it with Node.js, use the following commands:

npm run build
npm start
		
Linting and Code Formatting
To run ESLint and Prettier, use the following commands:

npm run lint
npm run prettier
		
To fix linting errors and format code, use the following commands:

npm run lint:fix
npm run prettier:fix
		
Note: Replace your-username with your actual GitHub username.