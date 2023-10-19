import { Provider } from 'react-redux'
import { render, fireEvent } from '@testing-library/react';
import { TodoForm } from 'components/features';
import store from 'store';

describe('TodoForm', () => {
  it('should render without errors', () => {
    render(
      <Provider store={store}>
        <TodoForm />
      </Provider>
    )
  })

  it('should open modal when button is clicked', () => {
    const { queryByTestId } = 
      render(
        <Provider store={store}>
          <TodoForm />
        </Provider>
      )
    const openModalButton = queryByTestId('open-modal')
    fireEvent.click(openModalButton)

    const modal = queryByTestId('modal')
    expect(modal).toBeInTheDocument()
  })

  it('should close modal when close button is clicked', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <TodoForm />
      </Provider>
    )
    const openModalButton = getByTestId('open-modal')
    fireEvent.click(openModalButton)

    const modal = getByTestId('modal')

    const closeModalButton = getByTestId('close-modal')
    fireEvent.click(closeModalButton)

    expect(modal).not.toBeInTheDocument()
  })

  it('should update input value when typed', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <TodoForm />
      </Provider>
    )
    const openModalButton = getByTestId('open-modal')
    fireEvent.click(openModalButton)

    const input = getByTestId('text-input')
    fireEvent.change(input, { target: { value: 'Lorem ipsum' } })

    expect(input.value).toBe('Lorem ipsum')
  })

})