import * as React from 'react'
import Button from './Button'
import StatefulButton from './StatefulButton'
import { Toggleable } from './Toggleable'

const TypeScriptPlayground = () => (
  <React.Fragment>
    <h1>Typescript Playground</h1>
    <Button onClick={e => console.log(e.target)}>Click Me!</Button>
    <StatefulButton />

    <Toggleable>
      {({ show, toggle }) => <span>{' ' + show + ''}</span>}
    </Toggleable>
  </React.Fragment>
)

export default TypeScriptPlayground
