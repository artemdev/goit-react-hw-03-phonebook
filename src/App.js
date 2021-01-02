import './App.css';
import { Component } from 'react'
import shortid from 'shortid'
import ContactList from './components/contactList'
import ContactForm from './components/contactForm'
import Filter from './components/filter'

const localContacts = JSON.parse(localStorage.getItem('contacts'))
const INITIAL_STATE = {
    contacts: (([...localContacts].length > 0) && [...localContacts]) || [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: ''
}

class App extends Component {
    state = {
        ...INITIAL_STATE
    }

    addContact = e => {
        e.preventDefault()
        const { name, number } = e.target

        if (this.invalidName(name.value)) return

        const contact = {
            "name": name.value,
            "number": number.value,
            "id": shortid.generate()
        }
        const newContacts = [...this.state.contacts, contact]

        this.setState({
            name: name.value,
            number: number.value,
            contacts: [...this.state.contacts, contact]
        })
        console.log(JSON.stringify(newContacts))
        localStorage.setItem('contacts', JSON.stringify(newContacts))
        // newContacts.map(item => localStorage.setItem(item.id, JSON.stringify(item))
        // localStorage.setItem('contacts', [...newContacts])
    }

    deleteContact = (id) => {
        const newContacts = this.state.contacts.filter(contact => contact.id !== id)
        this.setState({ ...this.state, contacts: [...newContacts] })

        localStorage.setItem('contacts', JSON.stringify(newContacts))
    }

    showResults = () => {
        console.log(INITIAL_STATE)
        return this.state.contacts.filter(item => item.name.toLowerCase().includes(this.state.filter)).map((item, index) =>
            <div key={shortid.generate()}> {item.name} {item.number} <button onClick={() => this.deleteContact(item.id)}>delete</button></ div>)

    }

    changeFilter = (e) => {
        const { value } = e.target
        this.setState({ ...this.state, filter: value.toLowerCase() })
    }

    //name validation
    invalidName = (name) => {
        const foundUsers = this.state.contacts.filter(item => item.name === name)
        if (foundUsers.length > 0) {
            alert('user already exists')
            return true
        }
        return false
    }

    render() {
        return (
            <div>
                <ContactForm addContact={this.addContact} />
                <Filter changeFilter={this.changeFilter} />
                <ContactList showResults={this.showResults} />
            </div>
        )
    }
}

export default App
