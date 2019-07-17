import AsyncDenmoComponent from "./AsyncDenmoComponent";
import { shallow, configure } from 'enzyme';
import React from 'react';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// jest knows to look in the __mocks__ folder
jest.mock('asyncdemo');

it("fetches images from unsplash and renders them on mount", done => {
  const wrapper = shallow(<AsyncDenmoComponent />);

  setTimeout(() => {
    wrapper.update();

    const state = wrapper.instance().state;
    expect(state.term).toEqual("Mountains");
    expect(state.status).toEqual("done");
    expect(state.images.length).toEqual(1);


    done();
  });
});