import {useState} from "react";
import Text from "./Text.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faXmarkCircle} from "@fortawesome/free-solid-svg-icons";
import {useModules} from "../lib/context/modules.context.jsx";

export default function Quiz({options, question, explanation}) {
  const [optionSelected, setOptionSelected] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const { isDarkMode } = useModules();
  
  function onOptionSelected(optionIsCorrect) {
    if (!optionSelected) {
      setOptionSelected(true);
      setIsCorrect(optionIsCorrect); 
    }
  }
  
  return (
    <div className={`border ${isDarkMode ? '' : 'text-black'}  border-solid rounded-2xl p-12 ${optionSelected && isCorrect ? 'bg-green-500 text-white' : ''} ${optionSelected && !isCorrect ? 'bg-red-600 text-white' : ''}`}>
      <Text variant={'h3'} className={'mb-6'}>{question}</Text>
      <div className={'flex flex-col gap-2'}>
        {options.map((option, index) => (
          <div onClick={() => onOptionSelected(option.correctAnswer)} className={`p-6 ${!optionSelected ? 'cursor-pointer hover:bg-gray-400' : 'text-gray-400'} bg-gray-200 rounded-2xl flex gap-4 items-center`} key={index}>
            {!optionSelected && <div className={'h-2 w-2 rounded-full border border-solid border-gray-800'} />}
            {optionSelected &&
              (
                option.correctAnswer ? <FontAwesomeIcon className={'text-green-500'} icon={faCheckCircle} /> : <FontAwesomeIcon className={'text-red-500'} icon={faXmarkCircle} />
              )}
            <span className={`text-black`}>{option.option}</span>
          </div>
        ))}
        {optionSelected && (
          <div>{explanation}</div>
        )}
      </div>
    </div>
  )
}