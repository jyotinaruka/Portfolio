import React from 'react'
import { Container, Header, Icon } from 'semantic-ui-react';

const Contact = () => {
    return (
        <section id="contact" className="contact m-nav contact-bg">
            <Container>
                <div className="reach">
                    <Header as={'h2'} textAlign='center'>Let's work together...</Header>
                    <div id="profile-link">
                        <a target="_blank" href="https://github.com/jyotinaruka">
                            <Icon name='github' /> Github</a>
                        <a target="_blank" href="https://www.linkedin.com/in/jyotinaruka/">
                            <Icon name='linkedin' /> LinkedIn</a>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Contact
