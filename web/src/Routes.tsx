// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, Private } from '@redwoodjs/router'

import AuthenticatedLayout from './layouts/AuthenticatedLayout/AuthenticatedLayout'
import AuthentificationLayout from './layouts/AuthentificationLayout/AuthentificationLayout'
import GlobalLayout from './layouts/GlobalLayout/GlobalLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={GlobalLayout}>
        {/* show the dashboard if authenticated */}
        <Route path="/" page={HomePage} name="home" />
        <Set wrap={AuthentificationLayout}>
          <Route path="/signin" page={SigninPage} name="signin" />
          <Route path="/signup" page={SignupPage} name="signup" />
        </Set>
        <Private unauthenticated="signin" wrap={AuthenticatedLayout}>
          <Route path="/create-profile" page={CreateProfilePage} name="createProfile" />
        </Private>
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
