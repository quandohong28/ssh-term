# Web SSH Terminal

The Web SSH Terminal application allows you to connect to an Ubuntu VPS server from your web browser, using a terminal interface powered by Xterm.js. Users can enter information such as IP address, port, username, and password to connect, and can disconnect when needed.

## Features
- SSH connection to an Ubuntu VPS directly from the web interface.
- Terminal interface with Xterm.js for a seamless user experience.
- Connection status notifications (success or failure).
- Disconnect button to terminate the SSH session.

## System Requirements
- Node.js
- npm (comes with Node.js)

## Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/your-username/web-ssh-terminal.git
    cd web-ssh-terminal
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Run the application**
    ```bash
    node server.js
    ```

4. **Access the application**
    Open your browser and go to: [http://localhost:3000](http://localhost:3000)

## Usage
1. Enter the `IP`, `Port`, `Username`, and `Password` of your VPS in the input fields.
2. Click **Connect** to establish the SSH connection to the VPS.
3. Once connected, you can enter commands in the terminal.
4. To disconnect, click **Disconnect**.

## Project Structure

- **server.js**: The Node.js server using Express and Socket.io to manage the SSH connection and handle communication with the client.
- **public/index.html**: The user interface that uses Xterm.js to display the terminal and manage connection controls.

## Libraries Used
- [Express](https://expressjs.com/): A minimal and flexible Node.js web application framework.
- [Xterm.js](https://xtermjs.org/): A library that provides a terminal interface for web applications.
- [Socket.io](https://socket.io/): A real-time communication library for server-client interaction.
- [ssh2](https://www.npmjs.com/package/ssh2): A library for SSH connections from Node.js.

## Security Considerations
- Avoid exposing your SSH login credentials publicly.
- Consider using SSH keys instead of passwords for better security.
- Ensure that your application is secured with SSL if deployed to a public environment.

## Contributing
Contributions are welcome! Please feel free to open an issue or submit a pull request for bug fixes or feature suggestions.

## License
This project is licensed under the [MIT License](LICENSE).
