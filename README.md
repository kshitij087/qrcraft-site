QRcraft - Dynamic QR Code Generator

QRcraft is a modern, user-friendly web application for creating, customizing, and managing QR codes. It provides a seamless experience for generating everything from simple text-based QR codes to branded ones with custom logos and colors.

Live Demo: qrcraft-site.vercel.app

Features

Dynamic Content: Generate QR codes for any text-based data, including URLs, phone numbers, emails, and more.

Rich Customization:
Size Adjustment: Interactively resize the QR code.
Color Control: Use color pickers to customize the QR code and its background.
Logo Integration: Upload and embed a custom logo into the center of the QR code.

Intuitive User Experience:
Live Preview: All customizations are reflected in real-time.
One-Click Actions: Dedicated buttons to "Generate," "Download," and "Reset."
Dark & Light Mode: A theme switcher for user comfort.

Persistent History:
Automatically saves a history of generated QR codes to the browser's local storage.
Allows users to instantly reload previous configurations and clear the history.

Project Purpose
The primary goal of QRcraft is to provide an accessible, all-in-one platform that empowers users to create functional and aesthetically pleasing QR codes without needing technical expertise. It aims to transform the standard, utilitarian QR code into a powerful branding and marketing tool.

Tech Stack & Tools
This project was built using foundational web technologies to ensure it is lightweight, fast, and easy to deploy.

Frontend:
HTML5: Provides the core structure of the application.
CSS3: Handles all styling, layout, and responsiveness, including a dark/light theme using CSS Variables.
Vanilla JavaScript: Powers all interactivity, DOM manipulation, event handling, and state management.

Core Library:
qr-code-styling.js: A powerful JavaScript library that handles the complex logic of QR code generation and advanced customizations like logo embedding and color changes.

Development & Deployment:
Version Control: Git
Code Hosting: GitHub
Deployment: Vercel

Project Structure
The project follows a simple and clean structure, with all files organized at the root level.
/
├── index.html      # The main HTML file for the application structure.
├── style.css       # All CSS styles for layout, theme, and responsiveness.
├── script.js       # All JavaScript logic for interactivity and QR generation.
└── logo.jpg        # The project's logo file.


Installation & Setup
To run this project locally, simply download the repository and open the index.html file in your web browser.
Clone the repository:
git clone https://github.com/kshitij087/qrcraft-site.git
Navigate to the project directory:
cd qrcraft-site
Open index.html in your browser.
Future Enhancements
Advanced QR Types: Add dedicated support for creating QR codes for Wi-Fi networks, vCards, and calendar events.
Enhanced Design Options: Introduce more styling choices, such as different shapes for the QR code dots and support for color gradients.
Cloud-Based History: Implement a user authentication system to save a user's QR code history to the cloud.
QR Code Analytics: Track scan counts for registered users to provide data on QR code engagement.
