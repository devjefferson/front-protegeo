import React from 'react';
import { Body } from '../core/Typograph/Body';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* <a href="#">
            <Heading size='small'>Pretegeo</Heading>
          </a> */}

          <Body className="max-w-md mx-auto mt-4 text-gray-500 dark:text-gray-400">
            O <b>Pretegeo</b> é seu aliado para receber alertas de desastres naturais como enchentes, incêndios e alagamentos, ajudando você a se manter seguro e informado.
          </Body>

          <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
            <button className="w-full px-5 py-2 text-sm tracking-wide text-white transition-colors duration-300 transform bg-blue-600 rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              Cadastre-se
            </button>
          </div>
        </div>

        <hr className="my-10 border-gray-200 dark:border-gray-700" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-500">© Copyright 2024. <b>PreteGeo</b> - <b>Unisuam</b>. Todos os direitos reservados.</p>

          <div className="flex mt-3 -mx-2 sm:mt-0">
            <a
              href="#"
              className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Teams"
            >
              Equipe
            </a>

            <a
              href="#"
              className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Privacy"
            >
              Privacidade
            </a>

            <a
              href="#"
              className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Cookies"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
