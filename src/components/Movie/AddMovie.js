import React, { useState, useEffect } from 'react';
import TextInput from '../UI/TextInput';
import TextArea from '../UI/TextArea';
import Button from '../UI/Button';

const AddMovie = props => {
  const initialValues = {
    imageUrl: '',
    title: '',
    subtitle: '',
    description: '',
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    if (submitted && Object.keys(formErrors).length === 0) {
      formValues.id = Math.round(Math.random() * 1000);
      formValues.canDelete = true;
      formValues.rating = 0;
      formValues.ratings = [];
      props.onAdd(formValues);
      setFormValues(initialValues);
      setFormErrors({});
      setSubmitted(false);
    }
  }, [formErrors]);

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setFormErrors(validate(formValues));
  };

  const validate = values => {
    let errors = {};

    if (!values.imageUrl) {
      errors.imageUrl = 'Please enter an URL for the cover image.';
    }

    if (!values.title) {
      errors.title = 'Please enter a title.';
    }

    if (!values.subtitle) {
      errors.subtitle = 'Please enter a subtitle.';
    }

    if (!values.description) {
      errors.description = 'Please enter a description.';
    }

    setFormErrors(errors);
    return errors;
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <TextInput
        name="imageUrl"
        label="Image URL:"
        value={formValues.imageUrl}
        changed={handleChange}
        error={formErrors.imageUrl}
      />
      <TextInput name="title" label="Title:" value={formValues.title} changed={handleChange} error={formErrors.title} />
      <TextInput
        name="subtitle"
        label="Subtitle:"
        value={formValues.subtitle}
        changed={handleChange}
        error={formErrors.subtitle}
      />

      <TextArea
        name="description"
        label="Description:"
        value={formValues.description}
        changed={handleChange}
        error={formErrors.description}
      />

      <Button type="submit">Add Movie</Button>
    </form>
  );
};

export default AddMovie;
