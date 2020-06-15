import React from 'react'
import {render} from '@testing-library/react'
import {Editor} from '../post-editor-01-markup'

// write all this out before coding the Editor form
// this leaves you with the task of writing Editor so that all tests pass (i.e. Test Driven Development)
test('renders a form with title, content, tags, and a submit button', () => {
  const {getByLabelText, getByText} = render(<Editor />)
  getByLabelText(/title/i)
  getByLabelText(/content/i)
  getByLabelText(/tags/i)
  getByText(/submit/i)
})
