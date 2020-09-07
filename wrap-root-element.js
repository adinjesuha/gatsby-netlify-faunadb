require('isomorphic-fetch')
const React = require('react')
const { ApolloProvider, ApolloClient, InMemoryCache } = require('@apollo/client')

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: '/.netlify/functions/graphql'
})

module.exports = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)