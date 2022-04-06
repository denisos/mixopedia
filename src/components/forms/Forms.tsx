import { useEffect, useState } from 'react';
import { Prompt } from "react-router-dom";

import SurveyAnswerRankExclusiveChoices from '../../sharedcomponents/surveys/SurveyAnswerRankExclusiveChoices';
import SurveyAnswerContainer from '../../sharedcomponents/surveys/SurveyAnswerContainer';
import SurveyAnswerTextArea from '../../sharedcomponents/surveys/SurveyAnswerTextArea';
import Button from '../../sharedcomponents/button/Button';

import './Forms.css';

const pollOptionData = {
  id: "ab8786hgjgg66609911",
  title: "Based on your overall experience, how satisfied were you with Palisades Tahoe?",
  minPrompt: "Not at all satisfied",
  maxPrompt: "Extremely satisfied",
  choiceValues: [ "0","1","2","3","4", "5","6","7","8","9"]
};


export default function Forms() {
  const [ choice, setChoice ] = useState<string>();
  const [ reasonsExplanation, setReasonsExplanation ] = useState<string>();

  // true if submit pressed, just simple example of using with reactrouter Prompt
  const [ isDirty, setIsDirty ] = useState(false);


  const handleSatisfactionOnClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("handleSatisfactionOnClick ", e?.target?.value);
    setChoice(e.target.value);
  }

  const handleReasonsExplanationChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log("handleReasonsExplanationChange ", e?.target?.value);
    setReasonsExplanation(e.target.value);
  }

  const handleOnClickSubmit = (e: React.UIEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsDirty(true);
    console.log("handleOnClickSubmit submitting with values: ", choice, reasonsExplanation);
  }


  return (
    <div className="body-container">    

      <SurveyAnswerContainer title={pollOptionData.title}>
        <SurveyAnswerRankExclusiveChoices {...pollOptionData} choice={choice} onChange={handleSatisfactionOnClick} />
      </SurveyAnswerContainer>

      <SurveyAnswerContainer title="Please tell us the reasons for your scores."  >
        <SurveyAnswerTextArea value={reasonsExplanation} onChange={handleReasonsExplanationChange} />
      </SurveyAnswerContainer>

      <Button type="submit" theme="primary" size="large" onClick={handleOnClickSubmit}>Submit</Button>

      <Prompt
        when={!isDirty}
        message="Are you sure you want to leave?"
      />
    </div>
  );
}
