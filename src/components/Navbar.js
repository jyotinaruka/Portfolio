import React from 'react'
import "react-router";
import { Link } from 'react-router-dom';
import {
    Container,
    Icon,
    Menu,
    Segment,
} from 'semantic-ui-react'
import logo from '../JS-logo.png'

const Navbar = () => {
    return (
        <Segment className="bg p-0" vertical>
            <Container className="">
                <Menu className="bg" borderless inverted size='massive'>
                    <Menu.Item as={Link} to="/" className="logo">
                        <img src={logo} alt="" />
                    </Menu.Item>
                    <Menu.Menu position='right' className="bg" icon='labeled' borderless>
                        <Menu.Item as={Link} to="/">
                            <Icon name='home' />
                            Home
                        </Menu.Item>
                        <Menu.Item as={Link} to="/about">
                            <Icon name='user circle' />
                            About
                        </Menu.Item>
                        <Menu.Item as={Link} to="/projects">
                            <Icon name='book' />
                            Work
                        </Menu.Item>
                        <Menu.Item as={Link} to="/contact">
                            <Icon name='at' />
                            Contact
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </Container>
        </Segment>

    )
}

export default Navbar
