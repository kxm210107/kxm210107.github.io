import { render, screen } from '@testing-library/react'
import Experience from '../../components/Experience'

test('renders experience section heading', () => {
  render(<Experience />)
  expect(screen.getByText('Experience')).toBeInTheDocument()
})

test('renders both employers', () => {
  render(<Experience />)
  expect(screen.getByText('Musume Dallas')).toBeInTheDocument()
  expect(screen.getByText('Sushi Axiom')).toBeInTheDocument()
})
