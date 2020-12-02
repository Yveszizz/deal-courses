import {Query} from 'react-apollo'
import gql from 'graphql-tag'
import Link from 'next/link'

const Toasters = () => (
    <Query query={gql`
    {
        toasters {
          edges {
            node {
              title
              slug   
            }
          }
        }
      }
      
    `}>
    {
        ({loading, error, data}) => {
            console.log(data);
            return (<p>hello</p>)
        }
      }
    </Query>
)

export default Toasters;