import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import {HiddenMessage} from '../hidden-message'

// we do this to skip the actual transition which:
// 1) could fail our test because our assertions will run before the element has fully transitioned out
// 2) we could use 'wait' to keep asserting until the transition finishes and the test passes BUT
// that will make our test run longer than needed
jest.mock('react-transition-group', () => {
  return {
    CSSTransition: props => (props.in ? props.children : null),
  }
})

test('shows hidden message when toggle is clicked', () => {
  const myMessage = 'hello world'
  const {getByText, queryByText} = render(
    <HiddenMessage>{myMessage}</HiddenMessage>,
  )
  const toggleButton = getByText(/toggle/i)
  // use 'queryByText' so it doesn't throw an error
  expect(queryByText(myMessage)).not.toBeInTheDocument()
  fireEvent.click(toggleButton)
  // use 'getByText' when possible bc it has better error messaging
  expect(getByText(myMessage)).toBeInTheDocument()
  fireEvent.click(toggleButton)
  expect(queryByText(myMessage)).not.toBeInTheDocument()
})
