# React Portfolio

This project is a personal portfolio built using React. It showcases the skills, projects, and contact information of Osama Alkhazali, a Full Stack Web Developer.

## Project Structure

The project is organized into the following directories and files:

- **public/**: Contains static files.
  - `favicon.ico`: The favicon for the application.
  - `index.html`: The main HTML file that serves as the entry point for the React application.

- **src/**: Contains the source code for the application.
  - **assets/**: Contains images used in the application.
    - **images/**: Directory for image files.
      - `logo.png`: The logo image used in the application.
  - **components/**: Contains React components for different sections of the portfolio.
    - **About/**: About section component.
      - `About.jsx`: Displays information about the portfolio owner.
      - `About.css`: Styles specific to the About component.
    - **Contact/**: Contact section component.
      - `Contact.jsx`: Includes a form for users to reach out.
      - `Contact.css`: Styles specific to the Contact component.
    - **Header/**: Header component.
      - `Header.jsx`: Includes the navigation menu and branding.
      - `Header.css`: Styles specific to the Header component.
    - **Hero/**: Hero section component.
      - `Hero.jsx`: Serves as the introductory section of the portfolio.
      - `Hero.css`: Styles specific to the Hero component.
    - **Projects/**: Projects section component.
      - `Project.jsx`: Displays individual project details.
      - `ProjectCard.jsx`: Reusable component for displaying project cards.
      - `Projects.css`: Styles specific to the Projects component.
    - **Skills/**: Skills section component.
      - `Skills.jsx`: Showcases the skills of the portfolio owner.
      - `SkillItem.jsx`: Reusable component for displaying individual skills.
      - `Skills.css`: Styles specific to the Skills component.
  - **layouts/**: Contains layout components.
    - `MainLayout.jsx`: Layout wrapper for the application, including the header and footer.
  - **data/**: Contains data files.
    - `projects.js`: Exports an array of project objects.
    - `skills.js`: Exports an array of skill objects.
  - `App.js`: The main application component that renders the layout and all other components.
  - `App.css`: Global styles for the application.
  - `index.js`: Entry point for the React application.
  - `index.css`: Global styles for the application.

## Getting Started

To get started with this project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd react-portfolio
npm install
```

### Running the Application

To run the application in development mode, use the following command:

```bash
npm start
```

This will start the development server and open the application in your default web browser at `http://localhost:3000`.

### Building for Production

To create a production build of the application, use the following command:

```bash
npm run build
```

This will generate a `build` directory with the optimized production build.

## License

This project is licensed under the MIT License.