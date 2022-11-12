import { act } from 'react-dom/test-utils'; // ES6
import React from 'react';
import rewire from 'rewire'
import ReactDOM from 'react-dom/client';
const NomalColumns = rewire('../component/ResultTable')

let container

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

it('Can create Dom', () => {
    act(() => {
        const stationNameMock = "テスト"
        const arrivalTimeMock = "03:35"
        ReactDOM.createRoot(container).render(<NomalColumns stationName={stationNameMock} arrivelTime={arrivalTimeMock} />)
    });
    isElement(container)
});
