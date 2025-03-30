# System Monitor

A lightweight network-based system load monitoring tool that provides real-time insights into the system's performance.

## Features

- CPU load monitoring
- RAM usage tracking
- Storage utilization monitoring
- Real-time data updates via WebSocket

## Prerequisites

- Node.js (v14 or higher)
- yarn

## Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd system-monitor
```

2. Install dependencies:
```bash
yarn install
```

## Usage

Start the monitoring server:
```bash
yarn start
```

For development with auto-reload:
```bash
yarn dev
```

## License

This project is provided as-is and is free to use for anyone.

## Dependencies

- express: Web server framework
- socket.io: Real-time bidirectional communication
- systeminformation: System information gathering
- diskusage: Disk space monitoring 