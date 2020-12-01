import '../styles/index.css'

import React, {Component} from 'react'
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
import {BrowserRouter, Route} from 'react-router-dom'
import App, {Container} from 'next/app'

const client = new ApolloClient({
  uri: 'http://dealcourses.local/?cache-buster=1925',
})

/*function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}*/
class MyApp extends App {
	render () {
	  const {Component, pageProps, client} = this.props
    return (
      <Container>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    )
  }
}

export default MyApp
