import React, { useState } from 'react'
import Title from '../LayOuts/Title'
import { ContactLeft } from './ContactLeft'


import { useRef } from 'react';
import emailjs from '@emailjs/browser';


export const Contact = () => {

    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    // ================== Email Validation start here ============================
    const emailValidation = () => {
        return String(email)
           .toLocaleLowerCase()
           .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    }

    













  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();









    if(username === ""){
        setErrMsg("Username is required!")
    }else if(phoneNumber === ""){
       setErrMsg("phoneNumber is required!")
    }else if(email === ""){
       setErrMsg("Please give your Email!")
    }else if(!emailValidation(email)){
       setErrMsg("Given a valid Email!")
    }else if(subject === ""){
       setErrMsg("Please give your Subject!")
    }else if(message === ""){
       setErrMsg("Message is required!")
    }else{
       setSuccessMsg(`Thanku you ${username}, "Your Message has been sent Successfully!"`)
       setErrMsg("")
       setUsername("")
       setPhoneNumber("")
       setEmail("")
       setSubject("")
       setMessage("")
       console.log(username, phoneNumber, email, subject, message );
    }












    emailjs
      .sendForm('service_ubwhpyq', 'template_p3pp30o', form.current, {
        publicKey: 'T5au1PEja81u99d2s',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );



   
  };




    return (
        <section id="contact" className='w-full py-20 border-b-[1px] border-b-black '>
            <div className="flex justify-center items-center text-center">
                <Title data={
                    {
                        title: "CONTACT",
                        des: "Contact With Me"

                    }
                } />
            </div>
            <div className='w-full mt-10'>
                <div className='flex justify-center flex-wrap gap-10 '>
                    <div className='mt-14 w-[300px] h-auto  lg:w-[600px] lgl:w-[600px]  xl:w-[600px] md:w-full     flex flex-col gap-10            border-l-[8px] border-l-black  '>
                          <ContactLeft/>
                    </div>
                    <div className='mt-14   w-[300px] lg:w-[600px] lgl:w-[600px]  xl:w-[600px] md:w-full h-auto        flex flex-col gap-10            border-l-[8px] border-l-black    '>
                       <div className='  h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-8 rounded-lg shadow-shadowOne   '>


                         <form ref={form} onSubmit={sendEmail } className='w-full flex flex-col gap-6 py-5' >
                               {

                                  errMsg && <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce'>{errMsg}</p>

                               }
                               {

                                  successMsg && <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce'>{successMsg}</p>

                               }
                               <div className='w-full flex gap-10'>
                                   <div className='w-1/2 flex flex-col gap-4'>
                                         <p className='text-sm text-gray-400 uppercase tracking-wide'>YOUR NAME</p>
                                         <input
                                                name='from_name'
                                                onChange={(e)=> setUsername(e.target.value)} 
                                                value={username} 
                                                className={`${ errMsg === "Username is required!" && "outline-designColor" } contactInput`} 
                                                type="text"
                                                required
                                                autoComplete='off'
                                         />
                                   </div>
                                   <div className='w-1/2 flex flex-col gap-4'>
                                         <p className='text-sm text-gray-400 uppercase tracking-wide'>Phone Number</p>
                                         <input
                                               name='from_phoneNumber'
                                               onChange={(e)=> setPhoneNumber(e.target.value)}
                                               value={phoneNumber}  
                                               className={`${ errMsg === "phoneNumber is required!" && "outline-designColor" } contactInput`}   
                                               type="text"
                                               required
                                               autoComplete='off'
                                         />
                                   </div>
                               </div>
                               <div className='w-full flex flex-col gap-4'>
                                    <p className='text-sm text-gray-400 uppercase tracking-wide'>Email</p>
                                    <input 
                                           name='from_email'
                                           onChange={(e) =>  setEmail(e.target.value)} 
                                           value={email} 
                                           className={`${ errMsg === "Please give your Email!" && "outline-designColor" } contactInput`} 
                                           type="email"
                                           required
                                           autoComplete='off'
                                    />
                               </div>
                               <div className='w-full flex flex-col gap-4'>
                                    <p className='text-sm text-gray-400 uppercase tracking-wide'>Subject</p>
                                    <input
                                          name='from_subject' 
                                          onChange={(e) =>  setSubject(e.target.value)} 
                                          value={subject}  
                                          className={`${ errMsg === "Please give your Subject!" && "outline-designColor" } contactInput`}  
                                          type="text"
                                          required
                                          autoComplete='off'
                                    />
                               </div>
                               <div className='w-full flex flex-col gap-4'>
                                    <p className='text-sm text-gray-400 uppercase tracking-wide'>Message</p>
                                    <textarea
                                             name='message' 
                                             onChange={(e) =>  setMessage(e.target.value)} 
                                             value={message} 
                                             cols="40"
                                             rows="8"
                                             className={`${ errMsg === "Message is required!" && "outline-designColor" } contactTextArea`}  
                                             required
                                             autoComplete='off'
                                        >
                                    </textarea>
                               </div>
                               <div className=''>
                                   <button className='w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent'><input type="submit" value="Send"/></button>
                               </div>
                               {

                                       errMsg && <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce'>{errMsg}</p>

                               }
                               {

                                       successMsg && <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce'>{successMsg}</p>

                               }                               
                         </form>


                       </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
