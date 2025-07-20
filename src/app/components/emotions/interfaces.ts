
export interface IEmotion {
  key: string;
  name: string;
  isVisible?: boolean;
  isReadOnly?: boolean;
  type:
    | 'anxious'
    | 'negative'
    | 'positive'
    | 'other'
}

