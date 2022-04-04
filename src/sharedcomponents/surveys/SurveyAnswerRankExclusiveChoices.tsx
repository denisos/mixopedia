
import SurveyAnswerRankExclusiveChoice from './SurveyAnswerRankExclusiveChoice';
import { SurveyAnswerRankExclusiveChoicesType }  from './SurveyTypes';

import './SurveyAnswerRankExclusiveChoices.css';

export default function SurveyAnswerRankExclusiveChoices({ 
  choice,  choiceValues, id, minPrompt, maxPrompt, onChange
} : SurveyAnswerRankExclusiveChoicesType) {
  
  return (
    <>
      <section>
        <span className="survey-answer-rank-exclusive-choices-min-prompt">{minPrompt}</span>
        <span className="survey-answer-rank-exclusive-choices-max-prompt">{maxPrompt}</span>
      </section>

      <div className="survey-answer-rank-exclusive-choices" >
        {choiceValues.map((value: string) => 
          <SurveyAnswerRankExclusiveChoice 
            key={`${id}-${value}`}
            value={value} 
            onChange={onChange} 
            isSelected={value === choice} 
            name={id}
          />
        )}
      </div>
    </>
  );
}
