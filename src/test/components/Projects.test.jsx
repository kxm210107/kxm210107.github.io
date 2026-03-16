import { render, screen } from '@testing-library/react'
import Projects from '../../components/Projects'

test('renders projects section heading', () => {
  render(<Projects />)
  expect(screen.getByText('Projects')).toBeInTheDocument()
})

test('renders HeartSync project', () => {
  render(<Projects />)
  expect(screen.getByText(/HeartSync/i)).toBeInTheDocument()
})
