import * as React from 'react'
import { mount } from 'enzyme'
import ExploreButtonControlWrapper, { ExploreButtonControlWrapperProps } from '../../portal-components/ExploreButtonControlWrapper'
import { MemoryRouter } from 'react-router'
import CardContainerLogic from 'synapse-react-client/dist/containers/CardContainerLogic'

describe('ExploreButtonControlWrapper works', () => {

  const props: ExploreButtonControlWrapperProps = {
    synapseObjectSingle: {
      name: 'CardContainerLogic',
      props: {
        sql: '',
        type: ''
      },
    },
    colors: ['red'],
    customRoutes: [
      {
        name: 'Custom Route 1'
      }
    ]
  }

  it('renders correctly', () => {
    const component = mount(<MemoryRouter><ExploreButtonControlWrapper {...props} /></MemoryRouter>)
    // check its defined
    expect(component).toBeDefined()
    // check that it renders a CardContainerLogic component
    expect(component.find(CardContainerLogic)).toHaveLength(1)
  })
})
