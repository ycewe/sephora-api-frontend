/* eslint-disable no-undef */

import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import Paginate from '../client/components/contentContainer/paginate/paginate-container';
import PaginateOffset from '../client/components/contentContainer/paginate/paginate-offset';
import PaginateSize from '../client/components/contentContainer/paginate/paginate-size';
import PageConstants from '../client/components/constants/pageConstants';

test('return correct state after last page is clicked', () => {
  const setPaginationsStub = sinon.spy();
  const pageRangeStub = {
    self: 'https://sephora-api-frontend-test.herokuapp.com/products?page%5Bnumber%5D=1\u0026page%5Bsize%5D=25',
    next: 'https://sephora-api-frontend-test.herokuapp.com/products?page%5Bnumber%5D=2\u0026page%5Bsize%5D=25',
    last: 'https://sephora-api-frontend-test.herokuapp.com/products?page%5Bnumber%5D=8\u0026page%5Bsize%5D=25',
  };

  const wrapper = mount(
    <Paginate
      setPaginations={setPaginationsStub}
      pageRange={pageRangeStub}
    />);

  wrapper.find(PaginateOffset)
    .find('#page-last')
    .simulate('click');

  expect(wrapper.state('offset')).toEqual('8');
});


test('returns correct page size when that option is selected', () => {
  const setPaginationsStub = sinon.spy();
  const pageRangeStub = {
    self: 'https://sephora-api-frontend-test.herokuapp.com/products?page%5Bnumber%5D=1\u0026page%5Bsize%5D=25',
    next: 'https://sephora-api-frontend-test.herokuapp.com/products?page%5Bnumber%5D=2\u0026page%5Bsize%5D=25',
    last: 'https://sephora-api-frontend-test.herokuapp.com/products?page%5Bnumber%5D=8\u0026page%5Bsize%5D=25',
  };

  const wrapper = mount(
    <Paginate
      setPaginations={setPaginationsStub}
      pageRange={pageRangeStub}
    />);

  wrapper.find(PaginateSize)
    .find('select')
    .simulate('change', { target: { value: PageConstants.option25 } });

  expect(wrapper.state('size')).toEqual(PageConstants.option25);
});
