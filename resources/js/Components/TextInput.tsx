import { forwardRef, useEffect, useRef } from 'react';

const TextInput = forwardRef<HTMLInputElement, { isFocused?: boolean; className?: string } & React.InputHTMLAttributes<HTMLInputElement>>(
    ({ isFocused = false, className = '', ...props }, ref) => {
        const inputRef = useRef<HTMLInputElement>(null);

        useEffect(() => {
            if (isFocused) {
                inputRef.current?.focus();
            }
        }, [isFocused]);

        return (
            <input
                {...props}
                ref={ref || inputRef}
                className={`rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${className}`}
            />
        );
    }
);

export default TextInput;
