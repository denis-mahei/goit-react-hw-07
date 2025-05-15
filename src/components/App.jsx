import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contactsOps.js';
import { selectError, selectLoading } from '../redux/contactsSlice.js';
import ContactList from './ContactList/ContactList.jsx';
import ContactForm from './ContactForm/ContactForm.jsx';
import SearchBox from './SearchBox/SearchBox.jsx';
import Layout from './Layout/Layout.jsx';
import Header from './Header/Header.jsx';
import Loader from './Loader/Loader.jsx';

const App = () => {
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Layout>
        <ContactForm />
        {loading && <Loader />}
        <ContactList />
      </Layout>
    </>
  );
};

export default App;
