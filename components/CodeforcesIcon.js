import React from 'react';

const CodeforcesIcon = ({ size = 24, className = "" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      width={size} 
      height={size} 
      className={className}
      fill="currentColor"
    >
      {/* Three filled bars representing Codeforces logo */}
      {/* Shortest bar (left) */}
      <rect x="1" y="7.2" width="4.8" height="13.6" rx="0.97" />
      
      {/* Medium bar (middle) */}
      <rect x="9.6" y="2.9" width="4.8" height="18.2" rx="0.97" />
      
      {/* Tallest bar (right) */}
      <rect x="18.2" y="10.1" width="4.8" height="10.9" rx="0.97" />
    </svg>
  );
};

export default CodeforcesIcon;
