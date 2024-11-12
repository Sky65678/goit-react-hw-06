import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { apiAddContacts } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";

// Схема валідації
const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short, min 3 letters!")
    .max(50, "Too long, max 50 letters!")
    .required("This field is required!"),
  number: Yup.string()
    .matches(/^[\d-]+$/, "Must be in number format!")
    .required("This field is required!"),
});

// Форма контакту
export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (contact, actions) => {
    dispatch(apiAddContacts(contact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.container}>
        <div className={css.inputContainer}>
          <label>Name</label>
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage
            className={css.inputError}
            name="name"
            component="span"
          />
        </div>
        <div className={css.inputContainer}>
          <label htmlFor="number">Number</label>
          <Field className={css.input} name="number" type="text" />
          <ErrorMessage
            className={css.inputError}
            name="number"
            component="span"
          />
        </div>
        <button className={css.inputButton} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
