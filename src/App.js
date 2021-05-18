import React from 'react';
import { connect } from 'react-redux';
import { getIsLoading } from './redux/contacts/contacts-selectors';
import Layout from './components/Layout';
import Section from './components/Section';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import MyLoader from './components/Loader/Loader';

const App = ({ isLoading }) => (
  <Layout>
    <Section title="Phonebook">
      <ContactForm />
    </Section>

    <Section title="Contacts">
      <Filter />
      <ContactList />
    </Section>
    {isLoading && <MyLoader />}
  </Layout>
);

const mapStateToProps = state => ({
  isLoading: getIsLoading(state),
});

export default connect(mapStateToProps)(App);
