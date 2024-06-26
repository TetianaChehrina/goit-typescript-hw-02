import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import { Formik, Field, Form, FormikValues, FormikHelpers } from "formik";
import { AiOutlineExclamation } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { useId } from "react";
import { SearchBarProps } from "./SearchBarProps.types";
const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const initialValues: FormikValues = { text: "" };
  const searchId = useId();
  const notify = () =>
    toast(
      <p className={css.error_Toast}>
        <AiOutlineExclamation className={css.error_Icon} />
        Please enter a search query!
      </p>
    );

  function handleSubmit(
    values: FormikValues,
    actions: FormikHelpers<FormikValues>
  ) {
    if (!values.text) {
      notify();
      return;
    } else {
      onSearch(values.text);
      console.log(values.text);
    }
    actions.resetForm();
  }

  return (
    <header className={css.header}>
      <Toaster
        position="top-center"
        gutter={8}
        toastOptions={{
          style: {
            background: "red",
            color: "#fff",
          },
        }}
      />
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={css.form}>
          <div>
            <label className={css.label} htmlFor={searchId}>
              Search
            </label>
            <Field
              className={css.search_Text}
              type="text"
              name="text"
              autoComplete="off"
              id={searchId}
              autoFocus
              placeholder="Search images"
            />
          </div>
          <button className={css.formBtn} type="submit">
            <AiOutlineSearch className={css.icon} />
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
