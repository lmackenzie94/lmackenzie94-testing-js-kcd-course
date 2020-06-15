import React from 'react'
import user from '@testing-library/user-event'
import {render} from '@testing-library/react'
import {FavoriteNumber} from '../favorite-number'

test('entering an invalid value shows an error message', () => {
  const {getByLabelText, getByRole, queryByRole, rerender} = render(
    <FavoriteNumber />,
  )
  const input = getByLabelText(/favorite number/i)
  user.type(input, '10')
  expect(getByRole('alert')).toHaveTextContent(/the number is invalid/i)
  rerender(<FavoriteNumber max={10} />)
  expect(queryByRole('alert')).toBeNull()
  // in the above, use queryByRole instead of getByRole
  // because anything prefixed with 'get' will throw an error if it can't find it
  // in this case, we WANT there to be no 'alert' element so we can use
  // queryByRole which will return 'null' if it doesn't exist and not break our test
})
