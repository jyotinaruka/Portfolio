import React from 'react'
import ScrollspyNav from "react-scrollspy-nav";
import {
    Container,
    Icon,
    Menu,
    Segment,
} from 'semantic-ui-react'

const Navbar = () => {
    return (
        <Segment className="bg p-0 navbar" vertical>
            <Container>
                <ScrollspyNav scrollTargetIds={['intro', 'about', 'projects', 'contact']}
                    activeNavClass="active" offset={-80} scrollDuration={500}>
                <Menu className="bg" borderless inverted size='massive'>
                        <Menu.Item as="a" href="/" className="logo">JS</Menu.Item>
                    <Menu.Menu position='right' className="bg" icon='labeled' borderless>
                            <Menu.Item as="a" href="#intro">
                            <Icon name='home' />
                            Home
                        </Menu.Item>
                            <Menu.Item as="a" href="#about">
                            <Icon name='user circle' />
                            About
                        </Menu.Item>
                            <Menu.Item as="a" href="#projects">
                            <Icon name='book' />
                            Work
                        </Menu.Item>
                            <Menu.Item as="a" href="#contact">
                            <Icon name='at' />
                            Contact
                        </Menu.Item>
                    </Menu.Menu>
                    </Menu>
                </ScrollspyNav>
            </Container>
        </Segment>
    )
}

export default Navbar
