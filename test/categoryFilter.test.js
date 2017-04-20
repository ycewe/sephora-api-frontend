/* eslint-disable no-undef */

import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import Filter from '../client/components/sideNav/filter/category-filter';
import FilterItem from '../client/components/sideNav/filter/filter-item';

test('returns correct singular category filter', () => {
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
    .find('#cat-tools')
    .simulate('change', { target: { value: 'tools', checked: true } });

  expect(wrapper.state('filters')).toEqual(['tools']);
});

test('returns correct multiple category filter', () => {
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
    .find('#cat-tools')
    .simulate('change', { target: { value: 'tools', checked: true } });
  wrapper.find(FilterItem)
    .find('#cat-brushes')
    .simulate('change', { target: { value: 'brushes', checked: true } });

  expect(wrapper.state('filters')).toEqual(['tools', 'brushes']);
});
