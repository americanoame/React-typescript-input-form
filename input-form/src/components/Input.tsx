import { forwardRef, type ComponentPropsWithRef } from 'react';

type InputProps = {
  label: string; // Custom prop for the label text
  id: string; // Custom prop for the input's id attribute
} & ComponentPropsWithRef<'input'>; // Merging custom props with the standard props of an <input> element

//forwardRef: This function is used to forward a ref from a parent component to a child

// Using forwardRef to forward the ref to the input element
export default forwardRef<HTMLInputElement, InputProps>(function Input({ label, id, ...props }, ref) {
  return (
    <p>
      {/* Rendering the label and input element */}
      <label htmlFor={id}>{label}</label>
      {/* Using the spread operator to pass the props to the input element */}
      <input id={id} name={id} {...props} ref={ref} /> {/* Forwarding the ref to the input element */}
    </p>
  );
});
