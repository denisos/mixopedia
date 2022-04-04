import { SurveyAnswerContainerType }  from './SurveyTypes';

import './SurveyAnswerContainer.css';

export default function SurveyAnswerContainer(props: SurveyAnswerContainerType) {
  const { title, children } = props;

  return (
    <div className="survey-answer-container">
      {title ? <h2>{title}</h2> : null}

      <div className="survey-answer-container-body">
        {children} 
      </div>
  </div>
  );
}
