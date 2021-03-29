import * as React from 'react';

export type HTMLInputProps =
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export type HTMLProps<T extends HTMLElement> =
  React.DetailedHTMLProps<React.HTMLAttributes<T>, T>;
