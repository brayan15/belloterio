import store from './store'

const expectedState = {
  Belloterio: {}
}
describe('Store', () => {
  it('Should have call store and assigned a default state', () => {
    expect(store).toBeInstanceOf(Object)
    expect(store.getState()).toEqual(expectedState)
  })
})
