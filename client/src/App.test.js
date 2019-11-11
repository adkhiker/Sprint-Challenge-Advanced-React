import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//import PlayerList from "./components/PlayerList";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { waitForElement } from "@testing-library/react";

afterEach(rtl.cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("Player Detection", async () => {
  const wrapper = rtl.render(<App />);
  const player = await waitForElement(() =>
    wrapper.queryByText(/ellen white/i)
  );
  expect(player).toBeTruthy();
});
