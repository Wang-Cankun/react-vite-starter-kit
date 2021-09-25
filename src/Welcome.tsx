import React from 'react'

interface IProps {
  name: string
}

function Welcome(props: IProps) {
  const time = new Date().toLocaleTimeString()

  return (
    <h1>
      Hello, {props.name}: {time}
    </h1>
  )
}

export default Welcome
