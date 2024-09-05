import { ComponentPropsWithoutRef, FormEvent } from 'react';

type FormProps = ComponentPropsWithoutRef<'form'> & {
  onSave: (value: unknown) => void;
};

export default function Form({onSave, children, ...otherProps}: FormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const forData = new FormData(event.currentTarget);
    const data = Object.fromEntries(forData);
    onSave(data);
  }

  return (
    <form onSubmit={handleSubmit} {...otherProps}>
      {children}
    </form>
  );
}
