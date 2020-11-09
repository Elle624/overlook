const chai = require('chai');
const spies = require('chai-spies');
chai.use(spies);
import { expect } from 'chai';
import domUpdate from '../src/domUpdate';

describe('domUpdate', () => {
  let elementAddHidden, elementAddHide, elementRemove;
  beforeEach(() => {
    elementAddHidden = {section: {classList: {add: () => {}}}, addHidden: true};
    elementAddHide = {section: {classList: {add: () => {}}}, addHide: true};
    elementRemove = {section: {classList: {remove: () => {}}}};
    chai.spy.on(elementAddHidden.section.classList, ['add'], () => {});
    chai.spy.on(elementAddHide.section.classList, ['add'], () => {});
    chai.spy.on(elementRemove.section.classList, ['remove'], () => {});
    chai.spy.on(domUpdate, 'listRooms', () => {});
    chai.spy.on(domUpdate, 'updateTypes', () => {});
    chai.spy.on(domUpdate, 'displayBookings', () => {});
  })

  afterEach(() => {
    chai.spy.restore(elementAddHidden.section.classList);
    chai.spy.restore(elementAddHide.section.classList);
    chai.spy.restore(elementRemove.section.classList);
  })

  it('should call add hidden when invoking updateElement', () => {
    domUpdate.updateElement([elementAddHidden]);

    expect(elementAddHidden.section.classList.add).to.have.been.called(1);
    expect(elementAddHidden.section.classList.add).to.have.been.called.with('hidden');
  })

  it('should call add hide when invoking updateElement', () => {
    domUpdate.updateElement([elementAddHide]);

    expect(elementAddHide.section.classList.add).to.have.been.called(1);
    expect(elementAddHide.section.classList.add).to.have.been.called.with('hide');
  })

  it('should call remove when invoking updateElement', () => {
    domUpdate.updateElement([elementRemove]);

    expect(elementRemove.section.classList.remove).to.have.been.called(1);
    expect(elementRemove.section.classList.remove).to.have.been.called.with('hidden');
    expect(elementRemove.section.classList.remove).to.have.been.called.with('hide');
  })

  it('should call listRooms when invoking updateAvailableRooms', () => {
    domUpdate.updateAvailableRooms({section: {innerHTML: ''}}, ['rooms']);

    expect(domUpdate.listRooms).to.have.been.called(1);
    expect(domUpdate.listRooms).to.have.been.called.with(['rooms']);
  })

  it('should call updateTypes when invoking displayTypes', () => {
    domUpdate.displayTypes({section: {innerHTML: ''}}, ['types']);

    expect(domUpdate.updateTypes).to.have.been.called(1);
    expect(domUpdate.updateTypes).to.have.been.called.with(['types']);
  })

  it('should call displayBookings when invoking updateGuestInfo', () => {
    domUpdate.updateGuestInfo({section: {innerHTML: ''}}, ['bookings'], 3);

    expect(domUpdate.displayBookings).to.have.been.called(1);
    expect(domUpdate.displayBookings).to.have.been.called.with(['bookings']);
  })

  it('should call displayBookings when invoking updateCustomerView', () => {
    domUpdate.updateCustomerView({section: {innerHTML: ''}}, ['bookings'], 3);

    expect(domUpdate.displayBookings).to.have.been.called(1);
    expect(domUpdate.displayBookings).to.have.been.called.with(['bookings']);
  })
  
}) 