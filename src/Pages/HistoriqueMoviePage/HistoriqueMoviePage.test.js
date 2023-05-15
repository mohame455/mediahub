import React from 'react';
import Enzyme, { shallow } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";

Enzyme.configure({ adapter: new Adapter() });
import "@testing-library/jest-dom";
import { useSelector } from 'react-redux';
import CardOrganisme from '../../Organisme/CardOrganisme/CardOrganisme';
import HistoriqueMoviePage from './HistoriqueMoviePage';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('HistoriqueMoviePage', () => {
  let wrapper;

  beforeEach(() => {
    useSelector.mockReturnValue([
      { id: 1, title: 'Movie 1' },
      { id: 2, title: 'Movie 2' },
    ]);

    wrapper = shallow(<HistoriqueMoviePage />);
  });

  afterEach(() => {
    useSelector.mockClear();
  });

  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the CardOrganisme component for each movie in the listHistorique', () => {
    expect(wrapper.find(CardOrganisme)).toHaveLength(2);
  });

  it('passes the correct props to each CardOrganisme component', () => {
    const cardComponents = wrapper.find(CardOrganisme);

    cardComponents.forEach((cardComponent, index) => {
      expect(cardComponent.prop('movie')).toEqual({
        id: index + 1,
        title: `Movie ${index + 1}`,
      });
    });
  });
});