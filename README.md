# Challenge-10-SVG-Logo-Maker


## Description

A command-line application that allows users to create simple SVG logos by providing text, shape, and colors. Users can choose from a circle, triangle, or square to generate their logo.

## Table of Contents 

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Features
Enter up to three characters of text.
Specify text color using color keywords or hexadecimal values.
Choose from three shapes: circle, triangle, or square.
Specify the shape's color using color keywords or hexadecimal values.
Automatically generates an SVG file named logo.svg.
Outputs a success message on the command line.

## Usage



SVG Logo Generator
A command-line application that allows users to create simple SVG logos by providing text, shape, and colors. Users can choose from a circle, triangle, or square to generate their logo.


bash
Copy code
npm install
Usage
Run the application using Node.js:

bash
Copy code
node index.js
Follow the prompts to enter your desired text, text color, shape color, and select a shape.

Once you have completed the prompts, an SVG file named logo.svg will be created in the project directory. You can open this file in any web browser to view your generated logo.

## Prompts
When running the application, you will be prompted to provide the following information:

Enter 3 or less characters text: (Input validation ensures that no more than three characters are entered.)
Enter text color: (You can use standard color keywords like red, blue, or a hexadecimal value like #ff5733.)
Enter shape color: (Similar to text color, specify using color keywords or hex values.)
Choose shape: (Select from the following options: circle, triangle, square.)
Shape Classes
The application defines three shape classes, each responsible for generating their respective SVG representation:

Circle: Generates an SVG circle with the specified text and colors.
Triangle: Generates an SVG triangle with the specified text and colors.
Square: Generates an SVG square with the specified text and colors.
Each shape class can be found in the lib directory.

License
This project is licensed under the MIT License - see the LICENSE file for details.