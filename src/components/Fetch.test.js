import React, {useState} from 'react';
import { render, fireEvent,waitForElement } from '@testing-library/react';
import Fetch from './Fetch';
import axiosMock from 'axios';
import '@testing-library/jest-dom/extend-expect'


test('Fetch makes an API call and displays the message', async () => {
    axiosMock.get.mockResolvedValueOnce({ data: 'hello there'});
    const url='/greeting';
    const {container, getByText, getByTestId} = render(<Fetch url={url} />);
    fireEvent.click(getByText('Fetch'));
    const greetingNode = await waitForElement(() => getByTestId('greeting'));

    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith(url);
    expect(greetingNode).toHaveTextContent('data fetched');
})


// https://www.leighhalliday.com/async-axios-react-testing-library
// check the embedded video in the above url too for axiosMock defination.
// checks the api request with react-testing-library
// a folder called __mocks__ in src directory needs to be created with name 'axios.js' and given
// some default export there for it to be used here.
// put special folder __mocks__ in the same location as your file Fetch.js and put file name axios.js inside it.

