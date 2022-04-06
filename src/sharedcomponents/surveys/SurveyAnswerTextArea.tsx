import { useRef, useState } from 'react';

import './SurveyAnswerTextArea.css';

interface SurveyAnswerTextAreaProps {
  name?: string;
  maxLength?: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => any;
  value: string | undefined;
  isAutoGrow?: boolean;
}

export default function SurveyAnswerTextArea({ 
  isAutoGrow = true, maxLength = 200, name = "", onChange, value 
}: SurveyAnswerTextAreaProps) {
  const [ length, setLength ] = useState(0); 

  // a ref to the control for autogrowing
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleOnChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setLength(e.target.value?.length);
    onChange(e);
  }

  function autoGrow(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (!isAutoGrow) {
      return;
    }

    // if height of content greater than height of textarea then increase size of textarea
    //  scrollHeight: measurement of the elements content including overflow
    //  clientHeight: height of the element in pixels
    //  scrollHeight/scrollWidth return actual height of content even if hidden overflow
    //  offsetHeigh/offsetWidth return space the element occupies and is visible (but not hidden)
    const refCurrent = textAreaRef.current;
    if (refCurrent) {
      if (refCurrent.scrollHeight > refCurrent.clientHeight) {
        refCurrent.style.height = `${refCurrent.scrollHeight}px`;
      }
    }
  }

  return (
    <div className="survey-answer-text-area-container-box">
      <div className="survey-answer-text-area-container">
        <textarea name={name}
          ref={textAreaRef}
          className="survey-answer-text-area" 
          onChange={handleOnChangeContent} 
          value={value} 
          maxLength={maxLength}
          onKeyUp={autoGrow}
        />
      </div>
      <div className="survey-answer-text-area-count">
        <span>{length}</span>
      </div>
    </div>
  );
}
