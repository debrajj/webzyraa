'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'Web Development',
    budget: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!)
  }, [])
  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const reset = () => {
    formData.name = ''
    formData.email = ''
    formData.interest = 'Web Development'
    formData.budget = ''
    formData.message = ''
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoader(true)

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey || templateId === 'YOUR_TEMPLATE_ID') {
      console.error('EmailJS configuration missing. Please check your .env.local file')
      alert('Email configuration error. Please contact support.')
      setLoader(false)
      return
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      interest: formData.interest,
      budget: formData.budget,
      message: formData.message,
    }

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text)
          setSubmitted(true)
          setLoader(false)
          reset()
        },
        (error) => {
          console.error('EmailJS Error Details:', {
            error,
            status: error.status,
            text: error.text,
            message: error.message
          })
          alert(`Failed to send email: ${error.text || error.message || 'Unknown error'}`)
          setLoader(false)
        }
      )
  }

  return (
    <section>
      <div className='relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10 before:rounded-full before:top-24 before:blur-3xl  before:-z-10'>
        <div className='container relative z-10'>
          <div className='flex flex-col gap-10 md:gap-20'>
            <div className='relative flex flex-col text-center items-center'>
              <h2 className='font-medium w-full max-w-32'>
                Love to hear from you, Get in
                <span className='instrument-font italic font-normal dark:text-white/70'>
                  {' '}
                  touch
                </span>
              </h2>
            </div>
            {submitted ? (
              <div className='flex flex-col items-center gap-8 text-center max-w-2xl mx-auto p-10 rounded-3xl bg-gradient-to-br from-green/10 via-green/5 to-transparent dark:from-green/20 dark:via-green/10 dark:to-transparent border border-green/20 dark:border-green/30 backdrop-blur-sm animate-in fade-in-0 zoom-in-95 duration-500'>
                <div className='relative'>
                  <div className='absolute inset-0 bg-green/20 rounded-full blur-xl animate-pulse'></div>
                  <div className='relative bg-green/10 dark:bg-green/20 p-4 rounded-full border border-green/30'>
                    <Icon
                      icon='ix:success-filled'
                      width='48'
                      height='48'
                      style={{ color: '#79D45E' }}
                      className='animate-bounce'
                    />
                  </div>
                </div>
                
                <div className='space-y-3'>
                  <h3 className='text-2xl font-semibold text-green dark:text-green'>
                    Message Sent Successfully!
                  </h3>
                  <p className='text-lg text-gray-600 dark:text-gray-300 leading-relaxed'>
                    Thank you for reaching out! We've received your message and will get back to you within 24 hours.
                  </p>
                </div>

                <div className='flex flex-col sm:flex-row gap-4 w-full justify-center'>
                  <Link
                    href='/'
                    className='group relative overflow-hidden bg-dark_black dark:bg-white text-white dark:text-dark_black font-medium rounded-full flex items-center justify-center gap-3 py-3 px-6 transition-all duration-300 hover:scale-105 hover:shadow-lg'>
                    <span className='relative z-10 transition-transform duration-200 ease-in-out group-hover:translate-x-1'>
                      Back to Home
                    </span>
                    <svg
                      width='20'
                      height='20'
                      viewBox='0 0 32 32'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='relative z-10 transition-transform duration-200 ease-in-out group-hover:translate-x-1'>
                      <path
                        d='M11.832 11.3334H20.1654M20.1654 11.3334V19.6668M20.1654 11.3334L11.832 19.6668'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </Link>
                  
                  <button
                    onClick={() => setSubmitted(false)}
                    className='group border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-full flex items-center justify-center gap-3 py-3 px-6 transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800/50'>
                    <span className='transition-transform duration-200 ease-in-out group-hover:translate-x-1'>
                      Send Another Message
                    </span>
                    <Icon
                      icon='material-symbols:refresh'
                      width='20'
                      height='20'
                      className='transition-transform duration-200 ease-in-out group-hover:rotate-180'
                    />
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className='flex flex-col bg-white dark:bg-dark_black rounded-2xl p-8 gap-8'>
                <div className='flex flex-col md:flex md:flex-row gap-6'>
                  <div className='w-full'>
                    <label htmlFor='name'>Your Name</label>
                    <input
                      className='w-full mt-2 rounded-full border px-5 py-3 outline-hidden transition dark:border-white/20
                                                focus:border-dark_black/50 dark:focus:border-white/50 dark:bg-black/40'
                      id='name'
                      type='text'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      placeholder='Enter your name'
                    />
                  </div>
                  <div className='w-full'>
                    <label htmlFor='email'>Your Email</label>
                    <input
                      className='w-full mt-2 rounded-full border px-5 py-3 outline-hidden transition dark:border-white/20
                                                focus:border-dark_black/50 dark:focus:border-white/50 dark:bg-black/40'
                      id='email'
                      type='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      placeholder='Enter your email'
                    />
                  </div>
                </div>
                <div className='flex flex-col md:flex md:flex-row gap-6'>
                  <div className='w-full'>
                    <label htmlFor='interest'>
                      What are you interested in?
                    </label>
                    <select
                      className='w-full mt-2 text-base px-4 rounded-full py-2.5 border transition-all duration-500 dark:border-white/20 focus:outline-0 dark:bg-black/40'
                      name='interest'
                      id='interest'
                      value={formData.interest}
                      onChange={handleChange}>
                      <option value='Web Development'>Web Development</option>
                      <option value='UI/UX Design'>UI/UX Design</option>
                      <option value='Social Media Branding'>Social Media Branding</option>
                    </select>
                  </div>
                  <div className='w-full'>
                    <label htmlFor='budget'>Project budget</label>
                    <select
                      className='w-full mt-2 text-base px-4 rounded-full py-2.5 border transition-all duration-500 dark:text-white border-solid dark:border-white/20 focus:outline-0 dark:bg-black/40'
                      name='budget'
                      id='budget'
                      value={formData.budget}
                      onChange={handleChange}>
                      <option value=''>Select your budget</option>
                      <option value='₹20,000'>₹20,000</option>
                      <option value='₹45,000'>₹45,000</option>
                      <option value='₹65,000'>₹65,000</option>
                      <option value='₹1,00,000+'>₹1,00,000+</option>
                    </select>
                  </div>
                </div>
                <div className='w-full'>
                  <label htmlFor='message'>Message</label>
                  <textarea
                    className='w-full mt-2 rounded-3xl border px-5 py-3 outline-hidden transition dark:border-white/20
                                        focus:border-dark_black/50 dark:focus:border-white/50 dark:bg-black/40'
                    name='message'
                    id='message'
                    value={formData.message}
                    onChange={handleChange}
                    placeholder='Let tell us know your project about'
                    rows={4}
                  />
                </div>
                <div>
                  {!loader ? (
                    <button
                      type='submit'
                      className='group w-fit text-white dark:text-dark_black font-medium bg-dark_black dark:bg-white rounded-full flex items-center gap-4 py-2 pl-5 pr-2 transition-all duration-200 ease-in-out  hover:bg-transparent border hover:text-dark_black border-dark_black'>
                      <span className='transform transition-transform duration-200 ease-in-out group-hover:translate-x-10'>
                        Let’s Collaborate
                      </span>
                      <svg
                        width='32'
                        height='32'
                        viewBox='0 0 32 32'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='transform transition-transform duration-200 ease-in-out group-hover:-translate-x-36 group-hover:rotate-45'>
                        <rect
                          width='32'
                          height='32'
                          rx='16'
                          fill='white'
                          className='fill-white dark:fill-black transition-colors duration-200 ease-in-out group-hover:fill-black '
                        />
                        <path
                          d='M11.832 11.3334H20.1654M20.1654 11.3334V19.6668M20.1654 11.3334L11.832 19.6668'
                          stroke='#1B1D1E'
                          strokeWidth='1.42857'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          className='stroke-dark_black dark:stroke-white transition-colors duration-200 ease-in-out group-hover:stroke-white'
                        />
                      </svg>
                    </button>
                  ) : (
                    <button className='bg-grey item-center flex gap-2 py-3 px-7 rounded-sm'>
                      <div
                        className='animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500'
                        role='status'
                        aria-label='loading'>
                        <span className='sr-only'>Loading...</span>
                      </div>{' '}
                      Submitting
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
