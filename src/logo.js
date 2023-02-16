import * as React from 'react';

export default function Logo({ className }) {
  return (
    <div className='logo u-fadein u-delay-4'>
      <a href='/' className='logo-type'>
        <span className={`logo-color-span ${className}`}>AF</span>
      </a>
    </div>
  );
}