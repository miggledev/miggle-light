
import React from 'react';

export const NotebookIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    strokeLinecap="round"
    strokeLinejoin="round"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 6C10.5 5.7 9.3 6.8 8 8C7.5 12 7.5 36 8 40C9.3 41.2 10.5 42.3 12 42" stroke="currentColor" />
    <path d="M12 6H38C39.5 6 40 6.5 40 8V40C40 41.5 39.5 42 38 42H12" stroke="currentColor" />
    <path d="M18 6V42" stroke="currentColor" strokeDasharray="2 4" />
    <path d="M24 14H34" stroke="currentColor" strokeLinecap="round" />
    <path d="M24 22H34" stroke="currentColor" strokeLinecap="round" />
    <path d="M24 30H34" stroke="currentColor" strokeLinecap="round" />
  </svg>
);

export const StylusIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    strokeLinecap="round"
    strokeLinejoin="round"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M14 34L28 20L32 24L18 38L12 40L14 34Z" stroke="currentColor" />
    <path d="M24 16L28 12L36 20L32 24" stroke="currentColor" />
    <path d="M28 12L32 8L40 16L36 20" stroke="currentColor" />
  </svg>
);

export const EcoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    strokeLinecap="round"
    strokeLinejoin="round"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M24 44C33.9411 44 42 35.9411 42 26C33 26 24 34.9411 24 26C24 17.0589 33 8 24 8C14.0589 8 6 16.0589 6 26C6 35.9411 14.0589 44 24 44Z" stroke="currentColor" />
    <path d="M24 44C33.9411 44 42 35.9411 42 26" stroke="currentColor" />
    <path d="M24 8C14.0589 8 6 16.0589 6 26C6 35.9411 14.0589 44 24 44" stroke="currentColor" />
    <path d="M24 8V44" stroke="currentColor" />
  </svg>
);

export const MagnetIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    className={className}
    width="48" 
    height="48" 
    viewBox="0 0 48 48" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    strokeLinecap="round"
    strokeLinejoin="round"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M10 24V12C10 8.7 12.7 6 16 6H32C35.3 6 38 8.7 38 12V24" stroke="currentColor" />
    <path d="M10 24H4V36C4 39.3 6.7 42 10 42H18C21.3 42 24 39.3 24 36V24H18H10Z" stroke="currentColor" />
    <path d="M38 24H44V36C44 39.3 41.3 42 38 42H30C26.7 42 24 39.3 24 36V24H30H38Z" stroke="currentColor" />
  </svg>
);

export const GlowIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    className={className}
    width="48" 
    height="48" 
    viewBox="0 0 48 48" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    strokeLinecap="round"
    strokeLinejoin="round"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z" stroke="currentColor" />
    <path d="M24 4V8" stroke="currentColor" />
    <path d="M24 40V44" stroke="currentColor" />
    <path d="M7.51471 7.51471L10.3431 10.3431" stroke="currentColor" />
    <path d="M37.6569 37.6569L40.4853 40.4853" stroke="currentColor" />
    <path d="M4 24H8" stroke="currentColor" />
    <path d="M40 24H44" stroke="currentColor" />
    <path d="M7.51471 40.4853L10.3431 37.6569" stroke="currentColor" />
    <path d="M37.6569 10.3431L40.4853 7.51471" stroke="currentColor" />
  </svg>
);

export const HeartHandsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    className={className}
    width="48" 
    height="48" 
    viewBox="0 0 48 48" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    strokeLinecap="round"
    strokeLinejoin="round"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M34 16C36.2 16 38 17.8 38 20C38 25 32 30 24 34C16 30 10 25 10 20C10 17.8 11.8 16 14 16C17 16 18.5 17.5 20 20C21.5 22.5 22 24 24 24C26 24 26.5 22.5 28 20C29.5 17.5 31 16 34 16Z" stroke="currentColor" />
    <path d="M15 16C13 14 12 10 14 8C16 6 20 6 24 10" stroke="currentColor" />
    <path d="M33 16C35 14 36 10 34 8C32 6 28 6 24 10" stroke="currentColor" />
  </svg>
);
