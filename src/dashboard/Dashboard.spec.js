// Test away
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Dashboard from './Dashboard'

test('dashboard renders correctly', () => {
  render(<Dashboard />)
})