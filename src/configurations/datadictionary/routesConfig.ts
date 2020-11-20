import { GenericRoute } from 'types/portal-config'

const routes: GenericRoute[] = [
  {
    to: '',
    displayName: 'Data Dictionary',
    isNested: false,
    synapseConfigArray: [
      {
        name: 'DataDictionary',
        props: {
          title: 'Graph View',
          url: '',
        },
      },
    ],
  },
]

export default routes
