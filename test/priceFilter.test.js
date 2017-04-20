/* eslint-disable no-undef */

import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import Filter from '../client/components/sideNav/filter/price-filter';
import FilterItem from '../client/components/sideNav/filter/filter-item';

test('returns correct price filter', () => {
  const isDisplayedStub = true;
  const setFilterStub = sinon.spy();
  const handleFilterSelectStub = sinon.spy();

  const wrapper = mount(
    <Filter
      isDisplayed={isDisplayedStub}
      setFilter={setFilterStub}
      handleFilterSelect={handleFilterSelectStub}
    />);
  wrapper.find(FilterItem)
    .find('#option2')
    .simulate('change', { target: { value: '30', checked: true } });
  expect(wrapper.state('filters')).toEqual('30');
});
