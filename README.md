# Simple Password Generator Web App
## Badges
[![Language](https://img.shields.io/badge/language-TypeScript-blue)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-green)](https://opensource.org/licenses/MIT)

## What it does
The Simple Password Generator Web App is a user-friendly tool designed to generate strong, unique passwords for securing online accounts. It provides a simple and intuitive interface for users to select password length and character set, generating a password that meets their specific needs. With features like password copying to clipboard and dark mode toggle, this web app aims to make password management easier and more convenient.

## Features
* Password length selection
* Character set selection
* Password generation
* Password copying to clipboard
* Dark mode toggle

## Requirements
* Node.js: 16.14.2
* npm: 8.5.5
* SvelteKit: 1.0.0-next.345
* Vite: 2.9.13
* TypeScript: 4.6.4

## Installation
To install the project, run the following command in your terminal:
```bash
npm install
```
This command will install all the required dependencies listed in the `package.json` file.

## Usage
To run the project, use the following command:
```bash
npm run dev
```
This will start the development server, and you can access the web app at `http://localhost:3000` in your browser. For example, if you want to generate a password of length 12 with uppercase letters, numbers, and special characters, you can select the corresponding options on the web app, and it will display the generated password.

## Environment Variables
| Variable | Description |
| --- | --- |
| `VITE_PORT` | The port number for the development server |
| `NODE_ENV` | The environment mode (development or production) |
| `TYPE_CHECK` | Enable or disable TypeScript type checking |

## Project Structure
```markdown
.
├── src
│   ├── lib
│   ├── routes
│   ├── styles
│   ├── app.d.ts
│   ├── app.html
│   ├── main.ts
│   └── index.ts
├── static
├── package.json
├── README.md
├── tsconfig.json
└── vite.config.js
```

## Contributing
To contribute to this project, please follow these steps:
1. Fork the repository to your GitHub account.
2. Clone the forked repository to your local machine.
3. Create a new branch for your feature or bug fix.
4. Make the necessary changes and commit them.
5. Push the changes to your forked repository.
6. Open a pull request to the main repository.

## License
This project is licensed under the MIT License. You can find a copy of the license in the `LICENSE` file.