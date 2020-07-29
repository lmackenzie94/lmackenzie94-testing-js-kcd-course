import React from 'react'
import {render, within} from '@testing-library/react'
import {Modal} from '../modal'

test('modal shows the children', () => {
  render(
    <Modal>
      <div data-testid="test" />
    </Modal>,
  )
  const {getByTestId} = within(document.getElementById('modal-root')) // scopes our queries to 'within' a specific element
  // i.e. the queries returned from render or within (ex. getByTestId) will be bound to the passed element instead of the document body.
  expect(getByTestId('test')).toBeInTheDocument()
})
