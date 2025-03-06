"use client";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
export default function FrequentQuestions({
  heading,
  paragraph,
  questions,
  answers,
  showExtraSelects,
  showFaqs = "true",
  headingBlog,
}) {
  const [isAnswerVisible, setIsAnswerVisible] = useState([]);

  useEffect(() => {
    if (questions) {
      setIsAnswerVisible(Array(questions.length).fill(false));
    }
  }, [questions]);

  const toggleAnswerVisibility = (index) => {
    setIsAnswerVisible((prevVisibility) => {
      const updatedVisibility = [...prevVisibility];
      updatedVisibility[index] = !updatedVisibility[index];
      return updatedVisibility;
    });
  };
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return showFaqs ? (
    <div className="bg-[#ffffff] flex flex-col justify-between w-full h-auto lg:py-[40px] py-[20px] px-[20px] xl:px-[100px] gap-4">
      <div className="child-text max-w-[1280px] mx-auto text-center flex flex-col gap-4">
        <h2 className=" text-[#000000]">{heading}</h2>

        <p className="font-normal md:flex hidden text-[#000000]">{paragraph}</p>
      </div>
      <div className="w-full  mx-auto flex flex-col gap-4">
        {questions &&
          questions.map((question, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.5,
            });
            return (
              <div
                key={index}
                ref={ref}
                className={`flex flex-col items-start justify-between gap-4 w-full  h-auto rounded-2xl border-t border-[#00000012] bg-[#EEEEEE] p-4 mx-auto relative transition-transform duration-700 ease-out ${
                  inView
                    ? "transform translate-y-0 opacity-100"
                    : "transform translate-y-10 opacity-0"
                }`}
              >
                <div
                  className="flex items-center justify-between w-full"
                  onClick={() => toggleAnswerVisibility(index)}
                >
                  <p className="paragraph-with-arrow text-base font-bold text-[#000000] lg:text-lg">
                    {question}
                  </p>
                  <i
                    className={`fa ${
                      isAnswerVisible[index] ? "fa-angle-up" : "fa-angle-down"
                    } text-bold text-blue-600 text-xl cursor-pointer`}
                    aria-hidden="true"
                  ></i>
                </div>
                {isAnswerVisible[index] && (
                  <span className="answer-content  font-normal text-[#000000]">
                    {answers[index]}
                  </span>
                )}
              </div>
            );
          })}
      </div>
    </div>
  ) : (
    <div
      id="faq"
      className="bg-[#ffffff] flex flex-col justify-between w-full h-auto gap-4 py-[20px]"
    >
      <div className="text-start">
        <h2 className="text-[#000000] md:text-2xl text-xl font-bold">
          {headingBlog}
        </h2>
      </div>
      <div className="w-full mx-auto flex flex-col gap-4">
        {questions &&
          questions.map((question, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-between gap-4 w-full h-auto rounded-2xl border-t border-[#00000012] bg-[#EEEEEE] p-4 mx-auto relative"
            >
              <div
                className="flex items-center justify-between w-full"
                onClick={() => toggleAnswerVisibility(index)}
              >
                <p className="paragraph-with-arrow text-base font-bold text-[#000000] lg:text-lg">
                  {question}
                </p>
                <i
                  className={`fa ${
                    isAnswerVisible[index] ? "fa-angle-up" : "fa-angle-down"
                  } text-bold text-blue-600 text-xl cursor-pointer`}
                  aria-hidden="true"
                ></i>
              </div>
              {isAnswerVisible[index] && (
                <div className="answer-content font-normal text-[#000000]">
                  {answers[index].includes("•") ? (
                    <>
                      <p>{answers[index].split("•")[0].trim()}</p>
                      <ul className="list-disc pl-4">
                        {answers[index]
                          .split("•")
                          .slice(1)
                          .map(
                            (point, i) =>
                              point.trim() && <li key={i}>{point.trim()}</li>
                          )}
                      </ul>
                    </>
                  ) : (
                    <p>{answers[index]}</p>
                  )}
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
