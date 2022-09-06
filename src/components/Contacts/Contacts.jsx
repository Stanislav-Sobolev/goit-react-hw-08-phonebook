import { HeadTitle } from './PhoneBook.styled';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { ContactForm } from '../ContactForm/ContactForm';
import { useGetContactsQuery, useAddContactMutation } from '../store';
// import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
// import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import authOperations from '../../Redux/authOperations';

export const Contacts = () => {
  const [name] = useState('');
  const [number] = useState('');
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const { data: items } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  console.log('items', items);

  const handleSubmit = async (e, { resetForm }) => {
    try {
      if (
        await items.find(el =>
          el.name.toLowerCase().includes(e.name.toLowerCase())
        )
      ) {
        alert(`${e.name} is already in contacts.`);
      } else {
        const newContact = {
          // id: nanoid(),
          name: e.name,
          number: e.number,
        };

        await addContact(newContact);
      }
    } catch (error) {
      alert(error.message);
    }

    resetForm();
  };

  const handleFilter = e => {
    setFilter(e);
  };

  const getVisibleContacts = () => {
    let result;
    if (items) {
      result = items.filter(el =>
        el.name.toLowerCase().includes(filter.toLowerCase())
      );
    } else {
      result = items;
    }

    return result;
  };

  const visibleContacts = getVisibleContacts();

  return (
    <>
      {/* <Helmet>
        <title>Contacts</title>
      </Helmet> */}
      <HeadTitle>Phonebook</HeadTitle>

      <ContactForm
        initialValues={{ items, name, number }}
        onSubmit={handleSubmit}
      />
      <HeadTitle>Contacts</HeadTitle>

      <Filter filterState={filter} handleFilter={handleFilter} />

      {items && <ContactList filteredArr={visibleContacts} />}
    </>
  );
};

ContactForm.propTypes = {
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func,
};

Filter.propTypes = {
  contacts: PropTypes.array,
  filterState: PropTypes.string,
  handleFilter: PropTypes.func,
};

ContactList.propTypes = {
  filteredArr: PropTypes.array,
};
