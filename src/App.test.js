import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('App', () => {
  const fetch = global.fetch;

  beforeEach(() => {
    global.fetch = jest.fn(() => {
      return Promise.resolve({}, 200)
    });
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});
