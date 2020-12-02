import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
//import { endpoint } from '../config';

const endpoint = 'http://dealcourses.local/?cache-buster=1925';

function createClient({ headers }) {
    return new ApolloClient({
        uri: endpoint,
        request: operation => {
            operation.setContext({
                fetchOptions: {
                    credentials: 'include'
                },
                headers
            });
        },
        // local data
        clientState: {
            resolvers: {
                Mutation: {}
            },
            defaults: {}
        }
    });
}

export default withApollo(createClient);