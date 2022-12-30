export type Orientation = 'vertical' | 'horizontal';
export type State = 'normal' | 'pass' | 'error';

export interface StepperConfig {
  label: string;
  state?: State;
  icon?: string;
  disabled?: boolean;
}
