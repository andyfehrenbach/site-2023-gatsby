import * as React from 'react';
import { Link } from 'gatsby';

export default function Logo({ className }) {
  return (
    <div className='logo'>
      <Link to='/' className={`logo-type ${className}`}>
        AF
      </Link>
    </div>
  );
}