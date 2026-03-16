import { render, screen } from '@testing-library/react'
import Footer from '../../components/Footer'

test('renders name and year', () => {
  render(<Footer />)
  expect(screen.getByText('Kevin Mai')).toBeInTheDocument()
  expect(screen.getByText('2026')).toBeInTheDocument()
})
