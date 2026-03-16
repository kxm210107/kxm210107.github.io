import { render, screen } from '@testing-library/react'
import Hero from '../../components/Hero'

test('renders hero heading', () => {
  render(<Hero />)
  expect(screen.getByText('Engineer')).toBeInTheDocument()
})

test('renders CTA link', () => {
  render(<Hero />)
  expect(screen.getByRole('link', { name: /get in touch/i })).toBeInTheDocument()
})

test('renders availability indicator', () => {
  render(<Hero />)
  expect(screen.getByText(/available for internships/i)).toBeInTheDocument()
})
