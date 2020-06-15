// import '@testing-library/jest-dom/extend-expect' // put this in jest config so it runs in every test file
import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Calculator from '../calculator'

// see vid 11 for ThemeProvider example, but basically do it like this:
// function Wrapper({children}){
//   return <ThemeProvider theme={'dark'}>{children}</ThemeProvider>
// }

// could take it a step further and build our own render function

// function renderWithProviders(ui, options){
//   return render(ui, {wrapper: Wrapper, ...options})
// }
function renderWithProviders(ui, options) {
  return render(ui, {...options})
}
// could move all the above to a separate 'calculator-test-utils.js' in the 'test' directory for easy reusability

test('the clear button switches from AC to C when there is an entry', () => {
  const {getByText} = renderWithProviders(<Calculator />)
  const clearButton = getByText('AC')

  fireEvent.click(getByText(/3/))
  expect(clearButton).toHaveTextContent('C')

  fireEvent.click(clearButton)
  expect(clearButton).toHaveTextContent('AC')
})
