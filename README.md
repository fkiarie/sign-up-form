# sign-up-form

This is a simple HTML and CSS implementation of a sign-up page for a fictional service called "Odin". The page includes a form with validation for matching passwords and a visually appealing background.

## Features

- Responsive design
- Background image
- Accessible form elements
- Password match validation
- User-friendly UI/UX

## Structure

The page consists of two main parts:
1. **Background Image**: A full-height background image that covers half the screen.
2. **Form Container**: A container with a sign-up form and related text.

## Files

- `index.html`: The main HTML file containing the structure and content of the page.
- Embedded CSS: Inline CSS within the `index.html` file for styling.

## Usage

1. Open `index.html` in a web browser to view the sign-up page.
2. Fill out the form fields:
   - First Name
   - Last Name
   - Email
   - Phone Number
   - Password
   - Confirm Password
3. Click the "Create Account" button to submit the form.
4. If the passwords do not match, an error message will be displayed. If they match, an alert will confirm the account creation.

## Code Overview

### HTML Structure

The HTML file includes the following main sections:

- **Header**: Contains meta tags for character set and viewport settings, and the title of the page.
- **Body**:
  - `div.background`: A div with a background image.
  - `div.form-container`: A container with the sign-up form and text content.

### CSS Styling

The inline CSS styles the elements to create a clean and responsive layout:

- Flexbox is used to create a two-column layout.
- Background image covers half the screen.
- Form container is centered and styled with padding, box-shadow, and background color.
- Input fields and buttons are styled for better user experience.


## Accessibility Features

- `aria-labels` for form inputs to enhance accessibility.
- `aria-hidden` attribute for the background image to indicate it is non-essential content.
- `role="alert"` for error messages to ensure they are announced by screen readers.
