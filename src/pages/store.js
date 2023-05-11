import * as React from 'react'
import NavBar from '../components/navbar'

const StorePage = () => {
    return (
        <main>
            <NavBar />
            <h1>Store</h1>
            <p>Come for the pulls, stay for the party!</p>
        </main>
    )
}

//Head API lets you define metadate and add page titles
export const Head = () => (
    <>
    <title>Store</title>
    <meta name="description" content="your description"/>
    </>
)


export default StorePage