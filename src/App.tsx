import { SearchOutlined } from '@ant-design/icons'
import SmileOutlined from '@ant-design/icons/lib/icons/SmileOutlined'
import { Button } from 'antd'
import React, { useState } from 'react'

import Welcome from '~/Welcome'

import { MoonIcon } from './icons/Moon'
import logo from './logo.svg'

function App() {
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
    <div className="flex flex-col min-h-screen text-center bg-white dark:bg-gray-700">
      <nav className="flex items-center justify-end h-32 px-16">
        <button
          className="flex p-2 text-black rounded hover:text-yellow-400 dark:text-white focus:outline-none hover:bg-gray-700 dark:hover:bg-gray-500 dark:hover:text-yellow-400"
          onClick={toggleDarkMode}>
          <MoonIcon></MoonIcon>
        </button>
      </nav>
      <header className="flex flex-col items-center justify-center flex-grow text-2xl text-gray-700 dark:text-white">
        <img src={logo} className="animate-spin-slow h-48" alt="logo" />
        <Welcome name="World"></Welcome>
        <p>Vite + React!</p>
        <div className="text-center mb-5">
          <SmileOutlined
            aria-label="this is a icon"
            twoToneColor="#eb2f96"
            height="2em"
            className="logo mr-0 mt-2 animate-spin-slow "
          />
        </div>
        <div className="my-8">
          <button
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-teal-600 border border-transparent rounded-md shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
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

export default App
