import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { addContact } from '../../redux/contactsOps.js';
import { MdOutlinePersonAddAlt } from 'react-icons/md';
import { validationSchema } from '../../utils/validation.js';

import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      addContact({
        id: crypto.randomUUID(),
        name: values.name,
        number: values.number,
      })
    );

    resetForm();
  };

  return (
    <section>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={css.formContainer}>
          <div>
            <label htmlFor="name" className={css.label}>
              Name
            </label>
            <Field
              className={css.formField}
              type="text"
              name="name"
              id="name"
            />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>
          <div>
            <label htmlFor="number" className={css.label}>
              Number
            </label>
            <Field
              className={css.formField}
              type="text"
              name="number"
              id="number"
            />
            <ErrorMessage
              className={css.error}
              name="number"
              component="span"
            />
          </div>
          <button className={css.bookmarkBtn} type="submit">
            <span className={css.iconContainer}>
              <MdOutlinePersonAddAlt />
            </span>
            <p className={css.text}>Add</p>
          </button>
        </Form>
      </Formik>
    </section>
  );
};
export default ContactForm;
