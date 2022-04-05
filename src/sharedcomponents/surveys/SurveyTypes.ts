
// reactjs definitely typed defintioins
// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/v16/index.d.ts

export interface SurveyAnswerRankExclusiveChoiceType {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
  isSelected: boolean;
  name: string;
}

export interface SurveyAnswerRankExclusiveChoicesType {
  choice: string | undefined;
  choiceValues: string[];
  id: string;
  maxPrompt?: string;
  minPrompt?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
}

export interface SurveyAnswerContainerType {
  title?: string;
  children: any;
}