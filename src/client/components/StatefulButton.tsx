import * as React from 'react'
import { MouseEvent } from 'react'
import Button from './Button'

const initialState = { clicksCount: 0 }

type State = Readonly<typeof initialState>

// No Props so we need the generic 'object'
class StatefulButton extends React.Component<object, State> {
  readonly state: State = initialState

  render() {
    const { clicksCount } = this.state
    return (
      <React.Fragment>
        <Button onClick={this.handleIncrement}>++</Button>
        <Button onClick={this.handleDecrement}>--</Button>
        You've clicked me {clicksCount} times!
      </React.Fragment>
    )
  }

  private handleIncrement = () => this.setState(incrementClicksCount)

  private handleDecrement = () => this.setState(decrementClicksCount)
}

const incrementClicksCount = (prevState: State) => ({
  clicksCount: prevState.clicksCount + 1
})

const decrementClicksCount = (prevState: State) => ({
  clicksCount: prevState.clicksCount - 1
})

export default StatefulButton
