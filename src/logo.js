import * as React from 'react';

export default function Logo({ className }) {
  return (
    <div className='logo'>
      <a href='/' className={`logo-type ${className}`}>
        AF
      </a>
    </div>
  );
}