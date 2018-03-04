import React from 'react'
import { FormattedRelative, FormattedMessage } from 'react-intl'
import moment from 'moment'
import styled from 'styled-components'
import { fetchGists } from '../util/api.js'

const HelloMessage = styled.span`
  color: #b0b0de;
  display: flex;
`

export default class HelloWorld extends React.Component {
  state = {
    gists: ''
  }

  componentDidMount() {
    fetchGists().then(gists => this.setState({ gists }))
  }

  render() {
    return (
      <h1>
        <HelloMessage>
          test23
          <FormattedMessage
            id="app.helloWorld.greeting"
            description="Greeting to welcome the user to the app"
            defaultMessage="Hello, {name}! Last Action: {date}"
            values={{
              name: <i>World</i>,
              date: (
                <FormattedRelative
                  value={moment().add(7, 'days')}
                  options={{ style: 'numeric', units: 'second' }}
                />
              )
            }}
          />
          {this.state.gists}
        </HelloMessage>
      </h1>
    )
  }
}
