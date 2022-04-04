
export interface SurveyAnswerRankExclusiveChoiceType {
  value: string;
  onChange: (e:any) => any;
  isSelected: boolean;
  name: string;
}

export interface SurveyAnswerRankExclusiveChoicesType {
  choice: string | undefined;
  choiceValues: string[];
  id: string;
  maxPrompt?: string;
  minPrompt?: string;
  onChange: (e:any) => any;
}

export interface SurveyAnswerContainerType {
  title?: string;
  children: any;
}