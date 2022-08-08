import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import LandingNav from './LandingNav'

const LandingContent = () => {
  return (
    <>
      <MetaTags
        title="BitRaise"
        description="Introduction to BitRaise the budget app"
      />
      <LandingNav />
      <div className="flex h-screen w-full items-center gap-8">
        <div className="flex w-full flex-col items-start justify-center gap-8 px-6 md:items-end md:px-0">
          <h2 className="flex flex-col md:items-end">
            <span className="text-6xl md:text-right md:text-7xl">
              Join the <b>new</b>
            </span>
            <span className="col-span-2 text-6xl md:text-right md:text-7xl">
              budget approche
            </span>
          </h2>
          <Link to={routes.signup()} className="btn btn-primary btn-lg">
            Join for free
          </Link>
        </div>
        <div className="relative hidden w-full md:block">
          <i className="emoji-rocket absolute inset-x-32 -inset-y-4 z-10 block h-4/6 w-4/6 xl:inset-x-48" />
          <svg
            id="sw-js-blob-svg"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className=" w-full "
          >
            <defs>
              <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                <stop
                  id="stop1"
                  stopColor="rgba(87, 13, 248, 1)"
                  offset="0%"
                ></stop>
                <stop
                  id="stop2"
                  stopColor="rgba(87, 13, 248, 1)"
                  offset="100%"
                ></stop>
              </linearGradient>
            </defs>
            <path
              fill="url(#sw-gradient)"
              d="M20.8,-24.2C28.5,-18.3,37.3,-13.2,39.7,-6C42.1,1.1,38.1,10.4,32.1,16.5C26.2,22.5,18.2,25.3,9.7,29.8C1.2,34.3,-7.9,40.5,-13.9,38.2C-19.8,36,-22.7,25.4,-26.1,16.5C-29.4,7.6,-33.3,0.5,-32.6,-6.2C-31.9,-12.8,-26.6,-19.1,-20.4,-25.3C-14.2,-31.4,-7.1,-37.5,-0.3,-37.1C6.5,-36.8,13.1,-30.1,20.8,-24.2Z"
              width="100%"
              height="100%"
              transform="translate(50 50)"
              strokeWidth="0"
            ></path>
          </svg>
        </div>
      </div>
    </>
  )
}

export default LandingContent
