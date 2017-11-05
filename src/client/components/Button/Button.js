import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
  background-color: ${({ type = '' }) =>
    type === 'disabled' ? 'grey' : type === 'primary' ? 'blue' : 'white'};
  color: ${({ type = '' }) => (type === 'primary' ? 'white' : 'initial')};
`

const Button = ({ type = '', text, onClick }) => (
  <Wrapper type={type} onClick={onClick}>
    {text}
  </Wrapper>
)

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
