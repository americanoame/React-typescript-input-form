import { type ComponentPropsWithoutRef } from 'react';

type ButtonProps = {
  el: 'button';
} & ComponentPropsWithoutRef<'button'>;

type AnchorProps = {
  el: 'anchor';
} & ComponentPropsWithoutRef<'a'>;

export default function button(props: ButtonProps | AnchorProps) {
  if (props.el === 'anchor') {
    return <a className="button" {...props} href="https://www.google.com"></a>;
  }
  return <button className="button" {...props}></button>;
}
