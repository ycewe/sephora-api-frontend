import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import Sort from '../client/components/sideNav/sort/sort-input';

test('returns correct category filter', () => {
  const setSortStub = sinon.spy();

  const wrapper = mount(
    <Sort
      setSort={setSortStub}
    />);
  wrapper.find('select').simulate('change', { target: { value: 'price' }});
  expect(wrapper.state('sort')).toEqual('price')
});
