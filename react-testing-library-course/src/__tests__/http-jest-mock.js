import React from 'react'
import {render, fireEvent, wait} from '@testing-library/react'
import {loadGreeting as mockLoadGreeting} from '../api'
import {GreetingLoader} from '../greeting-loader-01-mocking'

// below, jest takes all the exported functions from that module and mocks them
// so importing 'loadGreeting' above will give us back a mocked version
// AND when our source files import from 'api', it will use the mocked version
jest.mock('../api')

test('loads greetings on click', async () => {
  const testGreeting = 'TEST_GREETING'
  // use 'mockResolved...' for promises
  mockLoadGreeting.mockResolvedValueOnce({data: {greeting: testGreeting}})
  const {getByLabelText, getByText} = render(<GreetingLoader />)
  const nameInput = getByLabelText(/name/i)
  const loadButton = getByText(/load/i)
  nameInput.value = 'Mary'
  fireEvent.click(loadButton)
  expect(mockLoadGreeting).toHaveBeenCalledWith('Mary')
  expect(mockLoadGreeting).toHaveBeenCalledTimes(1)
  // will continue to call the callback function until it no longer throws an error
  // in our case, this will happen when 'setGreeting' is called
  await wait(() =>
    expect(getByLabelText(/greeting/i)).toHaveTextContent(testGreeting),
  )
})
