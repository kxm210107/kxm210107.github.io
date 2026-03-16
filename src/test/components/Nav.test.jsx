import { render, screen } from '@testing-library/react'
import Nav from '../../components/Nav'

test('renders logo link', () => {
  render(<Nav />)
  expect(screen.getByText('Kevin Mai')).toBeInTheDocument()
})

test('renders all nav links', () => {
  render(<Nav />)
  expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /experience/i })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /education/i })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
})
