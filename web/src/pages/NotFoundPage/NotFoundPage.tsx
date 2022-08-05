import { Link, routes } from '@redwoodjs/router'

export default () => (
  <div className="bg-white min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
    <div className="max-w-max mx-auto">
      <main className="sm:flex">
        <p className="text-4xl font-extrabold text-red-600 sm:text-5xl">404</p>
        <div className="sm:ml-6">
          <div className="sm:border-l sm:border-gray-200 sm:pl-6">
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
              Page not found
            </h1>
            <p className="mt-1 text-base text-gray-500">
              Check the URL in the address bar and please try again.
            </p>
          </div>
          <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
            <Link
              to={routes.home()}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Home
            </Link>
            <Link
              to="#"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Get Help
            </Link>
          </div>
        </div>
      </main>
    </div>
  </div>
)
