import { useRef } from 'react';

import './SurveyAnswerTextArea.css';

interface SurveyAnswerTextAreaProps {
  name?: string;
  maxLength?: number;
  onChange: (e:any) => any;
  value: string | undefined;
  isAutoGrow?: boolean;
}

export default function SurveyAnswerTextArea({ 
  isAutoGrow = true, maxLength = 200, name = "", onChange, value 
}: SurveyAnswerTextAreaProps) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  function autoGrow(theField:any) {
    if (!isAutoGrow) {
      return;
    }

    const refCurrent = textAreaRef.current;
    if (refCurrent) {
      if (refCurrent.scrollHeight > refCurrent.clientHeight) {
        refCurrent.style.height = `${refCurrent.scrollHeight}px`;
      }
    }
  }

  return (
    <div className="survey-answer-text-area-container">
      <textarea name={name}
        ref={textAreaRef}
        className="survey-answer-text-area" 
        onChange={onChange} 
        value={value} 
        onKeyUp={autoGrow}
      />
    </div>
  );
}
