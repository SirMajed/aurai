import React from 'react';

export interface ButtonProps {
  text: string;
  type?: 'button' | 'submit';
  onClick: () => void;
}
export const Button = ({ text, type, onClick }: ButtonProps) => {
  return <button className='bg-pink-600 rounded-md px-4 py-1.5 text-white' type={type} onClick={onClick}>
    {text}
  </button>;
};
