import React, { useState } from 'react';
import contact from '../assets/images/contact.svg';
import emailjs from 'emailjs-com';
import Integer from './Integer';

function Contact() {
  const [content, setContent] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [success, setSuccess] = useState(false);
  const [danger, setDanger] = useState(false);

  const clearScreen = () => {
    setTimeout(() => {
      setSuccess(false);
      setDanger(false);
    }, 5000);
  };

  const sendWsp = () => {
    const url = 'https://web.whatsapp.com/send?phone=573134810480&text=';
    const message = `Hola me llamo ${content.name} y estoy interesado en ${content.message}.&app_absent=0`;
    const link = url + message.replace(/ /g, '%20');

    window.open(link, '_blank');
  };

  async function sendEmail() {
    if (
      content.name === '' ||
      content.email === '' ||
      content.phone === '' ||
      content.message === ''
    ) {
      alert(
        'Para poder contactarte es importante que diligencies todos los campos'
      );
      return;
    }

    await emailjs
      .send('hyrdev', 'template_ywu1ld5', content, 'user_XGAGU3wnXYUK9ZKIadseA')
      .then(() => {
        setSuccess(true);
        sendWsp();
      })
      .then(
        () => {
          setContent({
            name: '',
            email: '',
            phone: '',
            message: '',
          });
          setSuccess(true);
          clearScreen();
        },
        (error) => {
          console.error(error.status);
          setDanger(true);
          clearScreen();
        }
      );
  }

  return (
    <div
      id="contact"
      className="min-w-screen min-h-screen flex items-center justify-center bg-gray-200 px-5"
    >
      <div
        className="fixed top-32 right-8 z-20 cursor-pointer opacity-75 hover:opacity-100 transition ease-out duration-300"
        onClick={() => {
          setSuccess(false);
          setDanger(false);
        }}
      >
        <div
          className={`${
            success ? 'flex' : 'hidden'
          } items-center bg-green-500 border-l-4 rounded border-green-700 py-2 px-3 shadow-md mb-2`}
        >
          <div className="text-green-500 rounded-full bg-white mr-3">
            <svg
              width="1.8em"
              height="1.8em"
              viewBox="0 0 16 16"
              className="bi bi-check"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
              />
            </svg>
          </div>
          <div className="text-white max-w-xs ">
            Mensaje enviado exitosamente
          </div>
        </div>
        <div
          className={`${
            danger ? 'flex' : 'hidden'
          } items-center bg-red-500 border-l-4 rounded border-red-700 py-2 px-3 shadow-md mb-2`}
        >
          <div className="text-red-500 rounded-full bg-white mr-3">
            <svg
              width="1.8em"
              height="1.8em"
              viewBox="0 0 16 16"
              className="bi bi-x"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"
              />
              <path
                fillRule="evenodd"
                d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"
              />
            </svg>
          </div>
          <div className="text-white max-w-xs ">
            Error durante el envio, intente nuevamente
          </div>
        </div>
      </div>
      <div className="bg-gray-100 text-gray-500 max-w-4xl rounded-3xl shadow-xl w-full overflow-hidden">
        <div className="md:flex w-full">
          <div className="hidden md:flex items-center justify-center w-1/2 bg-purple-500 py-10 px-10">
            <img src={contact} alt="Contact us" className="w-full" />
          </div>
          <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
            <div className="text-center mb-10">
              <h1 className="font-bold text-3xl text-gray-900">Contactanos</h1>
            </div>
            <div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <label className="text-xs font-semibold px-1">
                    Nombre completo
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="text"
                      value={content.name}
                      name="name"
                      onChange={(e) =>
                        setContent({
                          ...content,
                          [e.target.name]: e.target.value,
                        })
                      }
                      className="w-full -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-purple-500"
                      placeholder="Escriba su mensaje"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row -mx-3">
                <div className="w-full md:w-1/2 px-3 mb-5">
                  <label className="text-xs font-semibold px-1">
                    Correo electrónico
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="email"
                      value={content.email}
                      name="email"
                      onChange={(e) =>
                        setContent({
                          ...content,
                          [e.target.name]: e.target.value,
                        })
                      }
                      className="w-full -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-purple-500"
                      placeholder="email@ejemplo.co"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-3 mb-5">
                  <label className="text-xs font-semibold px-1">
                    No. Telefónico
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                    </div>
                    {success ? (
                      <input
                        type="number"
                        value={content.phone}
                        name="phone"
                        onChange={(e) =>
                          setContent({
                            ...content,
                            [e.target.name]: e.target.value,
                          })
                        }
                        className="w-full -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-purple-500"
                        placeholder="310 000 0000"
                      />
                    ) : (
                      <Integer
                        value={content.phone}
                        min={0}
                        max={573259999999}
                        onChange={(number) =>
                          setContent({
                            ...content,
                            phone: number,
                          })
                        }
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <label className="text-xs font-semibold px-1">Mensaje</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                    </div>
                    <textarea
                      value={content.message}
                      name="message"
                      onChange={(e) =>
                        setContent({
                          ...content,
                          [e.target.name]: e.target.value,
                        })
                      }
                      className="w-full -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-purple-500"
                      placeholder="Dejanos su mensaje"
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <button
                    onClick={() => sendEmail()}
                    className="block w-full max-w-xs mx-auto bg-purple-500 hover:bg-purple-700 focus:bg-purple-700 text-white rounded-lg px-3 py-3 font-semibold"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
