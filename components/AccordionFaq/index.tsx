import { useState } from "react";

const AccordionFaq = ({
  questions}:{
  questions:{
      question: string
      answer: string
    }[]
}) => {
  const [openQuestions, setOpenQuestions] = useState<{[key: string]: boolean}>({});

  const toggleQuestion = (index: string) => {
    setOpenQuestions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4">
  
      <div className="lg:mt-12 bg-gray-100 dark:bg-gray-800 md:mt-10 mt-8 lg:py-7 lg:px-6 md:p-6 py-6 px-4 lg:w-8/12 w-full mx-auto">
        <div className="flex justify-between md:flex-row flex-col">
          <div className="md:mb-0 mb-8 md:text-left text-center">
            <h2 className="font-medium dark:text-white text-xl leading-5 text-gray-800 lg:mb-2 mb-4">
              Perguntas
            </h2>
            <p className="font-normal dark:text-gray-300 text-sm leading-5 text-gray-600 md:w-8/12 md:ml-0 w-11/12 mx-auto">
            Dúvidas sobre o uso do app para desastres naturais

            </p>
          </div>
        </div>
      </div>

      <div className="lg:w-8/12 w-full mx-auto">
        {questions.map((item, index) => (
          <div key={index} className="w-full md:px-6">
            <hr className="w-full lg:mt-10 my-8" />
            <div className="flex justify-between items-center w-full">
              <div>
                <p className="flex justify-center items-center dark:text-white font-medium text-base leading-6 lg:leading-4 text-gray-800">
                  <span className="lg:mr-6 mr-4 dark:text-white lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                    {index + 1}.
                  </span>
                  {item.question}
                </p>
              </div>
              <button
                aria-label="toggler"
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                onClick={() => toggleQuestion(String(index))}
              >
                <img
                  className={`transform ${
                    openQuestions[index] ? "rotate-180" : ""
                  } dark:hidden`}
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
                  alt="toggler"
                />
                <img
                  className={`transform ${
                    openQuestions[index] ? "rotate-180" : ""
                  } dark:block hidden`}
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2dark.svg"
                  alt="toggler"
                />
              </button>
            </div>
            {openQuestions[index] && (
              <div className="mt-6 w-full">
                <p className="text-base leading-6 text-gray-600 dark:text-gray-300 font-normal">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccordionFaq;
