This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify



## Task

The Movie Application should contain the below features:

- [ ] Movies Search
	- [X] List movies coming from search result - Title, Year, Type, Poster
	- [ ] Clicking on a particular movie will redirect you to the selected movie detail page

- [ ] Movie detail
	- [ ] Show selected movie detail information - Title, Year, Type, Poster, Plot, IMDB rating, Runtime, Genre
	- [ ] For video you can choose any trailer that you want 
	- [ ] Navigate back to the movie list. Previous search & results should be still visible
- [X] Movie Pagination
	- [X] pagination should show movies per page, and total movie results

- [ ] Pages should have proper urls and navigation should work as expected:
	- [ ] using the back and forward button of the browser should take to the correct page
	- [ ] reloading the current page should keep your search results

Technologies required
	- [React](https://reactjs.org/)
	- [Sass](http://sass-lang.com/)
	
You may use any 3rd party libraries which can facilitate your development.

Optional: Extra Credit
	- Clean code
	- Unit tests
	- [ ] Responsive, polished design
	- Animations
	- Apply state management to your application. You may use any 3rd party libraries which can facilitate your development. Redux or similar
	- [ ] Implement live search 
	- Implement infinite scroll with pagination(for example https://codepen.io/timseverien/pen/XXYaZe/)

If you get the demo in good shape and have extra time, add your own flair and features.

Content
	- Content should be fetched from - http://www.omdbapi.com/ You can use `8b47da7b` API key or create your own if necessary here: http://www.omdbapi.com/apikey.aspx
	- Example API call - http://www.omdbapi.com/?apikey=8b47da7b&s=Batman

Deliverable
	- [ ] Provide a working application
	- [ ] Provide source code in a public Git, Stash or Bitbucket repository
	- [ ] Provide markdown readme file
		- [ ] General information about the app
		- [ ] Provide steps how to build/launch your application

Mockup is here

https://www.figma.com/file/gbRShTWT5QVr0vJxfv75ML/Test---1?node-id=1%3A2

Good luck!


## Styles

Fonts
- Montserrat bold (700) 24/1.2 - slider year
- Montserrat bold (700) 48/120% 10% - slider heading
- Montserrat medium (500) 24/1.2 - slider navigation
- Montserrat bold (700) 64/1.2 - intro
- Montserrat medium (500) 18/1.2 - search input
- Montserrat medium (500) 36/1.2 - item heading
- Montserrat medium (500) 18/1.2 - item info
- Montserrat medium (500) 18/1.2 - pagination "items per page"
- Montserrat bold (700) 18/1.2 - pagination
- Montserrat regular (400) 18/1.2 - pagination "total"

- Montserrat medium (500) 24/1.2 - back button
- Montserrat bold (700) 48/1.2 - movie heading
- Montserrat bold (700) 36/1.2 - movie rating
- Montserrat bold (700) 48/1.2 - movie rating
- Montserrat regular (400) 24/1.2 - movie info
- Montserrat bold (700) 24/1.2 - movie info
- Montserrat medium (500) 18/150% - movie description
