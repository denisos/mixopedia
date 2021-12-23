// import { ReactElement } from 'react';

import './Button.css';

interface ButtonProps {
  className?: string;
  disabled?: boolean;
  theme?: 'primary' | 'secondary' | 'disabled';
  size?: 'large' | 'medium' | 'small';
  testid?: string;
  type: 'button' | 'reset' | 'submit';
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
  children: string;
}

export default function Button(props: ButtonProps) {
  const { children, className = '', size = 'medium', theme = 'primary', ...rest } = props;

  const btnChildren = (
    <span className="btnChildren">{children}</span>
  );

  return (
    <button {...rest}
      className={`btn ${className} ${theme} ${size}`}>
      {btnChildren}
    </button>
  );
}
