import { Component } from 'react'
import Section from './section'
class ContactForm extends Component {

    render() {
        return (
            <Section title="Phonebook">
                <form action="" onSubmit={this.props.addContact}>

                    <label htmlFor="name">
                        Name <br />
                        <input type="text" id="name" />
                    </label>
                    <br />
                    <label htmlFor="number">
                        Number <br />
                        <input type="text" id="number" />
                    </label>
                    <br />

                    <button type="submit">Add contact</button>
                </form>
            </Section>

        )
    }
}

export default ContactForm
