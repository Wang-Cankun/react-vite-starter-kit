import { SearchOutlined } from '@ant-design/icons'
import SmileOutlined from '@ant-design/icons/lib/icons/SmileOutlined'
import { Button, Divider } from 'antd'
import React, { useState } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

import Welcome from '~/Welcome'

import { MoonIcon } from './icons/Moon'
import logo from './logo.svg'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen text-center dark:bg-gray-700 bg-white">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Divider />
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function Home() {
  const [count, setCount] = useState(0)

  function toggleDarkMode() {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      localStorage.setItem('theme', 'light')
      document.documentElement.classList.remove('dark')
    } else {
      localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
    }
  }
  return (
    <div>
      <nav className="flex items-center justify-end px-16 h-32">
        <button
          className="dark:hover:bg-gray-500 dark:hover:text-yellow-400 flex p-2 text-black dark:text-white hover:text-yellow-400 hover:bg-gray-700 rounded focus:outline-none"
          onClick={toggleDarkMode}>
          <MoonIcon></MoonIcon>
        </button>
      </nav>
      <header className="flex flex-col flex-grow items-center justify-center text-gray-700 dark:text-white text-2xl">
        <img src={logo} className="h-48 animate-spin-slow" alt="logo" />
        <Welcome name="World"></Welcome>
        <p>Vite + React!</p>
        <div className="mb-5 text-center">
          <SmileOutlined
            aria-label="this is a icon"
            twoToneColor="#eb2f96"
            height="2em"
            className="logo mr-0 mt-2 animate-spin-slow"
          />
        </div>
        <div className="my-8">
          <button
            className="inline-flex items-center px-6 py-3 text-white text-base font-medium bg-teal-600 hover:bg-teal-700 border border-transparent rounded-md focus:outline-none shadow-sm focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            onClick={() => setCount((count) => count + 1)}>
            Count is: {count}
          </button>
        </div>
        <Button
          type="primary"
          icon={<SearchOutlined />}
          onClick={() => setCount((count) => count + 1)}>
          Antd button: {count}
        </Button>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="text-blue-400"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
          {' | '}
          <a
            className="text-blue-400"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer">
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

function About() {
  return <h2>About</h2>
}

function Users() {
  return <h2>Users</h2>
}
export default App
