import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import {
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Grid,
} from "@mui/material";
import * as Yup from "yup";

const countries = [
  { value: "in", label: "India" },
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "uk", label: "United Kingdom" },
];

const hobbies = [
  { value: "reading", label: "Reading" },
  { value: "gaming", label: "Gaming" },
  { value: "traveling", label: "Traveling" },
];

const initialValues = {
  name: "",
  address: "",
  country: "",
  gender: "",
  hobbies: [],
};

// Validation
const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters")
    .matches(/^[a-zA-Z ]*$/, "Name must contain only letters and spaces"),
  address: Yup.string().required("Address is required"),
  country: Yup.string().required("Country is required"),
  gender: Yup.string().required("Gender is required"),
});

// Submission
const onSubmit = (values, { resetForm }) => {
  console.log(values);
  alert("Form submitted");
  resetForm();
};

const ContactForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Field
              as={TextField}
              name="name"
              label="Name"
              variant="outlined"
              fullWidth
            />
            <ErrorMessage
              name="name"
              component="div"
              className="error-message"
            />
          </Grid>

          <Grid item xs={12}>
            <Field
              as={TextField}
              name="address"
              label="Address"
              multiline
              variant="outlined"
              fullWidth
            />
            <ErrorMessage
              name="address"
              component="div"
              className="error-message"
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="country-label">Country</InputLabel>
              <Field as={Select} name="country" labelId="country-label">
                {countries.map((country) => (
                  <MenuItem key={country.value} value={country.value}>
                    {country.label}
                  </MenuItem>
                ))}
              </Field>
              <ErrorMessage
                name="country"
                component="div"
                className="error-message"
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl component="fieldset">
              <RadioGroup row>
                <FormControlLabel
                  control={<Field as={Radio} name="gender" value="male" />}
                  label="Male"
                />
                <FormControlLabel
                  control={<Field as={Radio} name="gender" value="female" />}
                  label="Female"
                />
              </RadioGroup>
              <ErrorMessage
                name="gender"
                component="div"
                className="error-message"
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="hobbies-label">Hobbies/Interests</InputLabel>
              <Field
                as={Select}
                multiple
                name="hobbies"
                labelId="hobbies-label"
              >
                {hobbies.map((hobby) => (
                  <MenuItem key={hobby.value} value={hobby.value}>
                    {hobby.label}
                  </MenuItem>
                ))}
              </Field>
              <ErrorMessage
                name="hobbies"
                component="div"
                className="error-message"
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  );
};

export default ContactForm;
