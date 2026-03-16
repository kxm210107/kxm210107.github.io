import { render, screen } from '@testing-library/react'
import About from '../../components/About'

test('renders about section heading', () => {
  render(<About />)
  expect(screen.getByText('About')).toBeInTheDocument()
})

test('renders stack skills', () => {
  render(<About />)
  expect(screen.getByText('Python')).toBeInTheDocument()
  expect(screen.getByText('React')).toBeInTheDocument()
})
