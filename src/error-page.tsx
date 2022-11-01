import React from 'react';
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error: unknown = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>Please check the console for technical details or </p>
      <p>
        <a href="/">click here</a> to return to the home page.
      </p>
    </div>
  );
}
