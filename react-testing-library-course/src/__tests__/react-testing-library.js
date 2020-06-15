import React from 'react'
import {render} from '@testing-library/react'
import {FavoriteNumber} from '../favorite-number'
// import ReactDOM from 'react-dom'
// import { getQueriesForElement } from '@testing-library/dom'

// essentially what 'render' abstracts for us is this:

// function render(ui) {
//   const container = document.createElement('div')
//   ReactDOM.render(ui, container)
//   const queries = getQueriesForElement(container)
//   return {container, ...queries}
// }

// example usage:
// const {getByLabelText} = render(<FavoriteNumber/>)

test('renders a number input with a label "Favorite Number"', () => {
  const {getByLabelText, debug} = render(<FavoriteNumber />) // remove debug after developing your tests
  // use regex to make query case insensitive since end user wouldn't care about casing
  const input = getByLabelText(/favorite number/i)
  expect(input).toHaveAttribute('type', 'number')
  // debug(input) or just debug() - can be placed anywhere
})
