import { render, screen } from '@testing-library/react'
import Contact from '../../components/Contact'

test('renders contact section', () => {
  render(<Contact />)
  expect(screen.getByText(/what's next/i)).toBeInTheDocument()
})

test('renders email link', () => {
  render(<Contact />)
  const emailLinks = screen.getAllByRole('link', { name: /kevinmai4563/i })
  expect(emailLinks.length).toBeGreaterThan(0)
})
