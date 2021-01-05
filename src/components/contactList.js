import { Component } from 'react'
import Section from './section'
import shortid from 'shortid'

class ContactList extends Component {



    render() {

        const { contacts, deleteContact } = this.props

        return (
            <Section title="Contacts">
                {contacts.map((item) =>
                    <div key={shortid.generate()}> {item.name} {item.number} <button onClick={() => deleteContact(item.id)}>delete</button></ div>)}
            </Section>
        )
    }
}

export default ContactList