import { forwardRef, useEffect, useRef } from 'react';

const TextArea = forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement> & { isFocused?: boolean; className?: string }>(
  ({ isFocused = false, className = '', ...props }, ref) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
      if (isFocused) {
        textAreaRef.current?.focus();
      }
    }, [isFocused]);

    return (
      <textarea
        {...props}
        ref={ref || textAreaRef}
        className={`rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 ${className}`}
      />
    );
  }
);

export default TextArea;
