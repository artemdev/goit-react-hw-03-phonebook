import { Component } from 'react'
import Section from './section'

class ContactList extends Component {


    render() {
        return (
            <Section title="Contacts">
                {this.props.showResults()}
            </Section>
        )
    }
}

export default ContactList