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
import PreviewLayout from './layouts/PreviewLayout/PreviewLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/early" page={EarlyPage} name="early" />
      <Set wrap={GlobalLayout}>
        {/* show the dashboard if authenticated */}
        <Route path="/" page={HomePage} name="home" />
        <Set wrap={AuthentificationLayout}>
          <Route path="/signin" page={SigninPage} name="signin" />
          <Route path="/signup" page={SignupPage} name="signup" />
        </Set>
        <Private unauthenticated="signin">
          <Set wrap={[PreviewLayout, AuthenticatedLayout]}>
            <Route path="/transactions" page={TransactionsPage} name="transactions" />
            <Route path="/stats" page={StatsPage} name="stats" />
            <Route path="/profile" page={ProfilePage} name="profile" />
          </Set>
          <Route path="/create-profile" page={CreateProfilePage} name="createProfile" />
        </Private>
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
