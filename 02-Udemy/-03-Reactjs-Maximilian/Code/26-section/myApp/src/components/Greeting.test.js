import { render } from '@testing-library/react';
import Greeting from './Greeting';
import userEvent from '@testing-library/user-event';
import { screen, configure } from '@testing-library/react';

describe('Greeting', () => {
  // test(description,function)
  test('', () => {
    //1 render componet what we test

    render(<Greeting />);

    //2 run logic that shoult be test

    //3 compare exection result wit expected results
    const helloWordTest = screen.getByText('! Hello World !');

    expect(helloWordTest).toBeInTheDocument();
  });
});
test('test not changed ,"Good morning"', () => {
  render(<Greeting />);
  const goodMorninigTextTest = screen.getByText('Good morning');
  expect(goodMorninigTextTest).toBeInTheDocument();
});

test('god bye when button clicke', () => {
  ///render
  render(<Greeting />);

  //act
  const buttonElementTest = screen.getByRole('button');
  userEvent.click(buttonElementTest);
  const buttonTest = screen.getByText('Good bye');

  expect(buttonTest).toBeInTheDocument();
});

test('forget to add conditional rendering', () => {
  render(<Greeting/>);

  const button = screen.getByRole('button');
  userEvent.click(button);
  const result = screen.getByText('Good morning');
  expect(result).toBeNull();
});
