
import React from 'react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

interface SignupErrorProps {
  message: string;
}

const SignupError: React.FC<SignupErrorProps> = ({ message }) => {
  return (
    <Alert variant="destructive" className="mt-4">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};

export default SignupError;
