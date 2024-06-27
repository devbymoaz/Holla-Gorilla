import React from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { InputBox } from '../../components';
import { signInSchema } from '../../utils/Schema';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hollo from '../../hollo.json';
import Lottie from 'lottie-react';

const SignIn = () => {
  const navigate = useNavigate();

  // Function to prevent body scrolling
  const preventBodyScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  // Function to allow body scrolling
  const allowBodyScroll = () => {
    document.body.style.overflow = 'auto';
  };

  return (
    <div className='h-screen overflow-hidden flex'>
      <div className='hidden md:flex w-1/2 relative items-center justify-center p-8'>
        <div className='absolute inset-0 bg-cover bg-center' style={{ backgroundImage: 'url(signin.jpg)' }}></div>
        <div className='absolute inset-0 bg-white opacity-90'></div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className='relative text-white text-center'
        >
          <Lottie animationData={Hollo} />
          <h2 className='text-4xl font-bold mb-4 text-black'>Welcome Back!</h2>
          <p className='text-xl text-black'>Please sign in to continue</p>
        </motion.div>
      </div>
      <motion.section
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className='w-full md:w-1/2 flex items-center justify-center bg-white overflow-y-auto'
      >
        <div className='w-full max-w-md p-8 space-y-8'>
          <div className='flex flex-col items-center'>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className='text-2xl font-bold text-dark-green'>Your Logo</p>
            </motion.div>
            <h1 className='mt-4 text-2xl font-bold leading-tight tracking-tight text-dark-green'>
              Sign in to your account
            </h1>
          </div>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={signInSchema}
            onSubmit={(values, { resetForm }) => {
              navigate('/dashboard');
            }}
          >
            {({ errors, touched }) => (
              <Form className='space-y-6'>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <Field
                    as={InputBox}
                    id='email'
                    type='email'
                    placeholder='Enter Email'
                    label='Email Address'
                    name='email'
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark-green focus:border-transparent'
                  />
                  <ErrorMessage
                    name='email'
                    component='div'
                    className='text-red-500 text-xs mt-1'
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  <Field
                    as={InputBox}
                    id='password'
                    type='password'
                    placeholder='Enter Password'
                    label='Password'
                    name='password'
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark-green focus:border-transparent'
                  />
                  <ErrorMessage
                    name='password'
                    component='div'
                    className='text-red-500 text-xs mt-1'
                  />
                </motion.div>
                <motion.button
                  type='submit'
                  className='w-full px-4 py-2 text-white bg-primary rounded-md focus:outline-none focus:ring-2 focus:ring-light-green hover:bg-green-700 transition-colors duration-200'
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={preventBodyScroll}
                  onMouseLeave={allowBodyScroll}
                >
                  Sign in
                </motion.button>
              </Form>
            )}
          </Formik>
        </div>
      </motion.section>
    </div>
  );
};

export default SignIn;
