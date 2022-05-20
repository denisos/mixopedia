
export interface Task {
  title: string;
  id: string;
  state: string;
  created: string;
  started?: string | undefined;
  completed?: string | undefined;
}
