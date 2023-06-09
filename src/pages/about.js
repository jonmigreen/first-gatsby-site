import * as React from 'react'
import NavBar from '../components/navbar'

const AboutPage = () => {
    return (
        <main>
            <NavBar />
            <h1>About Us</h1>
            <p>Come for the pulls, stay for the party!</p>
        </main>
    )
}

//Head API lets you define metadate and add page titles
export const Head = () => (
    <>
    <title>About Me</title>
    <meta name="description" content="your description"/>
    </>
)


export default AboutPage