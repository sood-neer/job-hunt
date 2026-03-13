// components/Button.js
import { forwardRef } from 'react';
import { Primitive } from '@radix-ui/react-primitive';
import clsx from 'clsx';

const Button = forwardRef(({ children, className, variant = 'default', ...props }, ref) => {
  const baseStyles = 'inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-all duration-200 active:scale-95';
  
  const variants = {
    default: 'bg-brand-600 text-white hover:bg-brand-700 shadow-md hover:shadow-lg hover:shadow-brand-500/30',
    outline: 'border-2 border-brand-200 text-brand-700 hover:bg-brand-50 hover:border-brand-300',
    ghost: 'bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900',
    glass: 'glass text-brand-900 hover:bg-white/80',
  };

  const combinedClassName = clsx(baseStyles, variants[variant], className);

  return (
    <Primitive.button
      ref={ref}
      className={combinedClassName}
      {...props}
    >
      {children}
    </Primitive.button>
  );
});

Button.displayName = 'Button';

export default Button;
