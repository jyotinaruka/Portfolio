import React, { useState } from 'react'
import {
    Button,
    Image,
    Transition,
    Divider,
    Container,
} from 'semantic-ui-react'
import jyoti3 from '../jyoti3.jpg'


const About = () => {
    const [visible, setVisible] = useState("true")
    const toggleVisibility = (e) => {
        setVisible(!visible)
    }

    return (
        <div>
            <Container>
                <h2></h2>
                <button onClick={toggleVisibility}>{visible ? 'Hide' : 'Show'}</button>
                <Divider hidden />
                <Transition visible={visible} animation='scale' duration={500}>
                    <Image size='small' src={jyoti3} />
                </Transition>
            </Container>
        </div>
    )
}

export default About
