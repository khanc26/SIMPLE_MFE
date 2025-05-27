# SIMPLE_MFE

A simple micro-frontend (MFE) application with multiple modules (`search-bar`, `product-list`, `product-detail`, and `host`). Follow the steps below to clone and run the project locally.

## Prerequisites

- **Node.js**: Version 14.x or higher. Download from [nodejs.org](https://nodejs.org/).
- **Git**: Required to clone the repo. Install from [git-scm.com](https://git-scm.com/).

## Setup and Run

Copy and paste the following commands into your terminal to set up and start all micro-frontends. Each app will run in the background, and the `host` app will start last.

```bash
# Clone the repository
git clone https://github.com/khanc26/SIMPLE_MFE.git && \
# Navigate to the project directory
cd SIMPLE_MFE && \
# Install and start search-bar
cd search-bar && npm install && npm start & \
cd .. && \
# Install and start product-list
cd product-list && npm install && npm start & \
cd .. && \
# Install and start product-detail
cd product-detail && npm install && npm start & \
cd .. && \
# Install and start host (last)
cd host && npm install && npm start
```

## Access the App

- After running the commands, the `host` app will typically start on `http://localhost:3000` (check the terminal for the exact port).
- The other micro-frontends (`search-bar`, `product-list`, `product-detail`) will run on their respective ports (e.g., `3001`, `3002`, etc.), which the `host` app will integrate.

## Notes

- The `&` symbol runs each `npm start` in the background so you can proceed to the next app. The `host` app is started last without `&` to keep the terminal focused on its output.
- If a port is already in use, the app will usually prompt you to use a different port—check the terminal output.

## Troubleshooting

- **Errors during `npm install`**: Delete the `node_modules` folder and `package-lock.json` in the problematic directory, then run `npm install` again.
- **Port conflicts**: If a port is occupied, the app will start on a different port. Check the terminal output for the correct URL.
- **Node.js version issues**: Use `nvm` to switch to a compatible Node.js version (e.g., `nvm use 14`).

## Contributing

Submit issues or pull requests at [https://github.com/khanc26/SIMPLE_MFE](https://github.com/khanc26/SIMPLE_MFE).
