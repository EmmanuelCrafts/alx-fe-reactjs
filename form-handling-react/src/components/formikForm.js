import { Formik, ErrorMessage, Form, Field } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object()({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const FormikForm = () => (
    <Formik
      initialValues={{username: '', email: '', password: ''}}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
        {() => (
            <Form>
                <div>
                     <Field type="text" name="username"></Field> 
                     <ErrorMessage name="username" component="div"></ErrorMessage>
                </div>
                <div>
                     <Field type="email" name="email"></Field> 
                     <ErrorMessage name="email" component="div"></ErrorMessage>
                </div>
                <div>
                     <Field type="password" name="password"></Field>
                     <ErrorMessage name="password" component="div"></ErrorMessage>
                </div>
                <button type="submit">Submit</button>
            </Form>
        )}
    </Formik>
);