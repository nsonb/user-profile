# Project summary
This is a create-react-app application with typescripts for typechecking.\
It fetches data from a provided api and display the data on the screen.

## Run the project
First install all dependencies using 'yarn' in the console.\
Then to start the project using 'yarn start'.\
The deployed version of the application can be found at:
https://sleepy-torvalds-47f486.netlify.app/

## Basic application structure
The application has the following basic structure:
  <App>
    <Route path = '/'>
      <Header />
      <Landing />
    </Route>
    <Route path = '/profile/:id'>
      <Profile/>
    </Route>
    <Footer/>
  </App>

## Routing
As seen above, the app utilizes react-router-dom (BrowserRouter, Switch, Route) for application\
navigation. The Profile component uses useParams to get the id of the user and useHistory for\
the navigate back functions (history.goBack()). 

## Data fetch
Fetching is done using axios (the code can be checked in src/api/placeholder.tsx).\
The data is then saved into UserContext (src/context/UserContext) to provide a\
single source of truth of the data.

## styled-component components
This application utilizes styled-components in conjunction with styled objects to\
to produce components. The shared components are housed in the src/components/common folder,\
which include commonly reused components for container, interactibles (button, switchbutton)\,
typography (headings, body text).

## Theme
Taking advantage of ThemeProvider in styled-components, this application has day and night\
themes. The theme choice is then stored into local storage using custom hook useStoredData\
(src/hook/useStoredData.tsx).

## Test
There are no UI tests in this application. There is one small set of tests for useStoredData\
custom hook during the writing of its functionalities. The test code can be checked out at\ 
\src\__test__\useStoredData.test.tsx\

Type yarn test in the console to run the tests.

## Constraint
Due to the limited amount of time provided for this projects, there are still possible improvements\
that can be made:

### Responsive Design
This is a desktop first application (under the assumption that the application is mostly going to be\
viewed on a desktop device) so some of the elements may go out of bound under smaller screen (most\
notably the Header and Profile components). These components need more @media-query and touch-ups\
in their grid design.

### Accessibility
Accessibility was not a primary concern during the construction of the application.

### Leftover comments
There are some leftover functionalities (such as more experimental layout) which are not yet\
developed due to time constraints and the possibilities of breaking the current design they are left out\
for the time being. They are kept mostly for future references.

