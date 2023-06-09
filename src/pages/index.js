// Step 1: Import React
import * as React from 'react'
import NavBar from '../components/navbar'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <NavBar />
      <h1>Welcome to my Gatsby site!</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </main>
  )
}

// creates title and metadata
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage
