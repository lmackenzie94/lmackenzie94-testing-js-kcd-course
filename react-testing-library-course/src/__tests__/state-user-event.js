import React from 'react'
import user from '@testing-library/user-event'
import {render} from '@testing-library/react'
import {FavoriteNumber} from '../favorite-number'

test('entering an invalid value shows an error message', () => {
  const {getByLabelText, getByRole} = render(<FavoriteNumber />)
  const input = getByLabelText(/favorite number/i)
  // user.type uses 'fireEvent' under the hood but
  // more accurately resembles how a user interacts with the element
  // in this case, a number of events are fired (key up, key down, change, etc.)
  user.type(input, '10')
  expect(getByRole('alert')).toHaveTextContent(/the number is invalid/i)
})
