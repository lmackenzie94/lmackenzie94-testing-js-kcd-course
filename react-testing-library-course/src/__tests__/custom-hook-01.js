import React from 'react'
import {render, act} from '@testing-library/react'
import {useCounter} from '../use-counter'

// typically only test the hook independently/directly when it's being used in multiple places
// otherwise, just test the component that uses it
test('exposes the count and increment/decrement functions', () => {
  let result
  function TestComponent() {
    result = useCounter()
    return null // bc function components have to return something
  }
  render(<TestComponent />)
  expect(result.count).toBe(0)
  // typically don't have to directly call act
  act(() => result.increment())
  expect(result.count).toBe(1)
  act(() => result.decrement())
  expect(result.count).toBe(0)
})
