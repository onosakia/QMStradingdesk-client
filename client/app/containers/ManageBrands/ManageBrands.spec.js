/* global beforeEach describe it */
import React from 'react'
import ManageBrands from './ManageBrands'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import i18n from '../../i18n/i18n'
import { I18nextProvider } from 'react-i18next'
import fixtures from '../../../../test/fixtures'

const mockStore = configureStore([thunk])
const store = mockStore(fixtures.client.reduxState)

describe('Containers:ManageBrands', () => {
  beforeEach((done) => {
    done()
  })

  it('Should render ManageBrands component', () => {
    const wrapper = generateComponent()
    wrapper.shallow()
  })
})

const generateComponent = (props = {}) => {
  return shallow(
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <ManageBrands {...props} />
      </I18nextProvider>
    </Provider>
  )
}
