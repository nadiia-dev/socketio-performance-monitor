# Socket.io Performance Monitor

## Overview

The **Socket.io Performance Monitor** is an application designed to measure and monitor the performance of Socket.io-based real-time applications. It provides an intuitive dashboard to visualize key performance metrics like CPU load, Memory usage and device information.

This project is built using **Node.js**, **React**, and **Socket.io** to offer a real-time monitoring solution with a focus on simplicity and functionality.

## Features

- **Real-time Socket.io Metrics**: Track the performance of your Socket.io connections in real-time.
- **Web Dashboard**: A clean and responsive web interface built with **React**, **Bootstrap** and **CSS**.

## Tech Stack

- **Frontend**: React, CSS, Bootstrap
- **Backend**: Node.js, Socket.io
- **Real-time Communication**: Socket.io

## Installation

### Prerequisites

Ensure you have the following installed on your system:

- Node.js
- npm

### Steps

1. Clone the repository

```bash
git clone https://github.com/nadiia-dev/socketio-performance-monitor.git
cd socketio-performance-monitor
```

2. Install server dependencies:

```bash
cd server
npm install
```

3. Install nodeClient dependencies:

```bash
cd nodeClient
npm install
```

3. Install frontend dependencies:

```bash
cd react-client
npm install
```

4. Configure your environment variables:

Create a .env files in each directory and fill it with enviroтment variables according to .env.example file.

5. Start the server:

```bash
cd server
node servers.js
```

6. Start node client:

```bash
cd nodeClient
node index.js
```

7. Start the frontend development server:

```bash
cd react-client
npm run dev
```

8. Now your react client should be running at http://localhost:5173.

### Usage

1. Open the app in your browser: http://localhost:5173.

2. The dashboard will display the real-time metrics for Socket.io performance.

3. Use the web interface to monitor various aspects like message CPU Load, memory usage and device information.
