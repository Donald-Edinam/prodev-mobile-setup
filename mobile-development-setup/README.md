# Project Setup and Development Documentation

## Setup Process

1. **Install Node.js and npm**: Ensure you have Node.js and npm installed on your machine. You can download them from [Node.js official website](https://nodejs.org/).

2. **Install Expo CLI**: Expo CLI is a command-line tool for developing React Native apps. Install it globally using npm:
    ```sh
    npm install -g expo-cli
    ```

3. **Create a New Expo Project**: Use the Expo CLI to create a new project:
    ```sh
    expo init my-new-project
    ```
    Follow the prompts to choose a template and set up your project.

4. **Navigate to Project Directory**: Move into your project directory:
    ```sh
    cd my-new-project
    ```

5. **Start the Development Server**: Start the Expo development server:
    ```sh
    expo start
    ```
    This will open a new tab in your browser with the Expo Developer Tools.

6. **Install Expo Go on Your Mobile Device**: Download and install the Expo Go app from the App Store (iOS) or Google Play Store (Android).

7. **Run Your App on a Mobile Device**: Open the Expo Go app on your mobile device and scan the QR code displayed in the Expo Developer Tools to run your app.

## Challenges Faced

1. **Environment Setup Issues**: 
    - **Problem**: Encountered issues with Node.js and npm versions.
    - **Solution**: Ensured the latest stable versions of Node.js and npm were installed.

2. **Expo CLI Installation Errors**:
    - **Problem**: Errors during the installation of Expo CLI.
    - **Solution**: Used `sudo` for permissions on macOS/Linux or ran the command prompt as an administrator on Windows.

3. **Network Connectivity**:
    - **Problem**: Mobile device unable to connect to the development server.
    - **Solution**: Ensured both the development machine and mobile device were on the same Wi-Fi network.

4. **QR Code Scanning Issues**:
    - **Problem**: QR code not scanning properly.
    - **Solution**: Adjusted the lighting and distance for better QR code recognition or manually entered the URL in the Expo Go app.

5. **Hot Reloading Not Working**:
    - **Problem**: Changes not reflecting immediately on the mobile device.
    - **Solution**: Ensured hot reloading was enabled in the Expo Developer Tools and restarted the development server if necessary.

## Troubleshooting Tips

- **Check Expo Documentation**: Refer to the [Expo documentation](https://docs.expo.dev/) for detailed guides and troubleshooting tips.
- **Community Support**: Utilize forums like [Stack Overflow](https://stackoverflow.com/questions/tagged/expo) and the [Expo community](https://forums.expo.dev/) for additional help.
- **Debugging Tools**: Use React Native Debugger and other debugging tools to diagnose and fix issues in your app.

By documenting the setup process and challenges faced, you can streamline future development efforts and quickly resolve any issues that arise.