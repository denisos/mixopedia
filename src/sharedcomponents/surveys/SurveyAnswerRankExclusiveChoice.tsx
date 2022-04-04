
import { SurveyAnswerRankExclusiveChoiceType } from './SurveyTypes'
import './SurveyAnswerRankExclusiveChoice.css';

export default function SurveyAnswerRankExclusiveChoice({ 
  value, onChange, isSelected = false, name 
}: SurveyAnswerRankExclusiveChoiceType) {

  return (
    <div tabIndex={0} className="survey-answer-rank-exclusive-choice-box" >
    <input type="radio" 
      aria-label={value}
      value={value}
      name={name}
      className="survey-answer-rank-exclusive-choice-radio"
      onChange={onChange}
    />
    <div className={`survey-answer-rank-exclusive-choice ${isSelected ? "selected" : ""}`}>{value}</div>
  </div>    
  );
}
