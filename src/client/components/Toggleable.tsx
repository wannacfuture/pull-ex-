import * as React from 'react'
import { Component, MouseEvent } from 'react'
import { render } from 'react-dom'

const initialState = { show: false }

type State = Readonly<typeof initialState>
type Props = Partial<{
  children: RenderCallback
  render: RenderCallback
}>

type RenderCallback = (args: ToggleableComponentProps) => JSX.Element
type ToggleableComponentProps = {
  show: State['show']
  toggle: Toggleable['toggle']
}

// const myFunction: RenderCallback = () => 'hi'

export class Toggleable extends Component<Props, State> {
  readonly state: State = initialState

  render() {
    const { children, render } = this.props
    const renderProps: ToggleableComponentProps = {
      show: this.state.show,
      toggle: this.toggle
    }

    if (render) {
      return render(renderProps)
    }

    return typeof children === 'function' ? children(renderProps) : null
  }

  private toggle = (event: MouseEvent<HTMLElement>) =>
    this.setState(updateShowState)
}

const updateShowState = (prevState: State) => ({ show: !prevState.show })
