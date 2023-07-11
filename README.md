# Login Signup Application

This is a login/signup application built with React JS and Firebase for authentication. The application allows users to authenticate using various methods, including email, Google, GitHub, Facebook, and phone number with OTP. Once authentication is successful, a welcome message is displayed to the user. The application's CSS design is implemented using Bootstrap.

## Demo
Check out the live demo of the Weather Forecasting Application: [login signup App Demo](https://nishanthar-droid.github.io/code-clause-login-signup-app/)

## Technologies Used

- React JS
- Firebase Authentication
- Bootstrap

## Key Features

- Multiple authentication methods: Email, Google, GitHub, Facebook, and phone number with OTP.
- User registration with email and password.
- User login with email and password or through social media accounts.
- Phone number verification using OTP.
- Welcome message after successful authentication.
- Responsive design using Bootstrap.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/NishanthAR-droid/code-clause-login-signup-app.git
   ```

2. Navigate to the project directory:
   ```
   cd code-clause-login-signup
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Set up Firebase project and enable Authentication services.
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Enable the desired authentication methods (Email/Password, Google, GitHub, Facebook, Phone).

5. Configure Firebase in the application.
   - Copy the Firebase configuration settings from your Firebase project.
   - Replace the placeholders in the `src/firebase.js` file with your Firebase configuration.

6. Start the application:
   ```
   npm start
   ```

7. Open your browser and navigate to `http://localhost:3000` to see the application running.

## Usage

- On the application's landing page, users can choose their preferred authentication method.
- Users can register using their email and password or sign in through social media accounts.
- For phone number authentication, users need to enter their phone number and verify it using the OTP sent to their phone.
- Upon successful authentication, users will be greeted with a welcome message.

## Contributing

Contributions to this project are welcome. Feel free to open issues and submit pull requests to contribute to the application's development.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React JS](https://reactjs.org/) for the JavaScript library used in building the application's user interface.
- [Firebase Authentication](https://firebase.google.com/products/auth) for providing authentication services.
- [Bootstrap](https://getbootstrap.com/) for the CSS framework used to create responsive designs.
