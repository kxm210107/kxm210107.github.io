import { render, screen } from '@testing-library/react'
import Education from '../../components/Education'

test('renders education section heading', () => {
  render(<Education />)
  expect(screen.getByText('Education')).toBeInTheDocument()
})

test('renders both institutions', () => {
  render(<Education />)
  expect(screen.getByText('UT Dallas')).toBeInTheDocument()
  expect(screen.getByText('Collin College')).toBeInTheDocument()
})
