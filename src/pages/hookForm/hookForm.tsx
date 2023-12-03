import { FC } from 'react';

export const Controlled: FC = () => {
  return (
    <>
      <div>Controlled works</div>
    </>
  );
};

// import React, { useState } from 'react';

// const countries = [/* List of countries */]; // Populate this array with the list of countries

// const validateName = (name) => /^[A-Z][a-z]*$/.test(name);
// const validateAge = (age) => /^\d+$/.test(age) && parseInt(age, 10) >= 0;
// const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// const validatePassword = (password) =>
//   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/.test(password);

// const validateFile = (file) =>
//   file && file.size <= 1048576 && /\.(png|jpeg)$/.test(file.name);

// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     age: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     gender: '',
//     acceptTerms: false,
//     picture: null,
//     country: '',
//   });

//   const [formErrors, setFormErrors] = useState({
//     name: '',
//     age: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     picture: '',
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked, files } = e.target;
//     const inputValue = type === 'checkbox' ? checked : type === 'file' ? files[0] : value;

//     setFormData({
//       ...formData,
//       [name]: inputValue,
//     });

//     // Perform validation
//     setFormErrors({
//       ...formErrors,
//       [name]:
//         name === 'name'
//           ? validateName(inputValue)
//             ? ''
//             : 'Name must start with an uppercase letter'
//           : name === 'age'
//           ? validateAge(inputValue)
//             ? ''
//             : 'Age should be a non-negative number'
//           : name === 'email'
//           ? validateEmail(inputValue)
//             ? ''
//             : 'Invalid email address'
//           : name === 'password' || name === 'confirmPassword'
//           ? validatePassword(formData.password) && formData.password === formData.confirmPassword
//             ? ''
//             : 'Passwords should match and meet the criteria'
//           : name === 'picture'
//           ? validateFile(inputValue)
//             ? ''
//             : 'Invalid file. Please upload a PNG or JPEG file (max 1 MB)'
//           : '',
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Check if there are any errors before submitting
//     const hasErrors = Object.values(formErrors).some((error) => error !== '');
//     if (hasErrors) {
//       console.log('Form has errors. Please fix them before submitting.');
//     } else {
//       // Handle form submission (e.g., dispatch to Redux store)
//       console.log('Form submitted:', formData);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="name">Name:</label>
//       <input
//         type="text"
//         id="name"
//         name="name"
//         value={formData.name}
//         onChange={handleChange}
//         required
//       />
//       <span>{formErrors.name}</span>

//       {/* Add other form fields similarly */}

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default RegistrationForm;

