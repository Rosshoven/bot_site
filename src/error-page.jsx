import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>👿 WHAT HAVE YOU DONE???? You are going up on TRIAL! 😈</h1>
      <h2>Or an unexpected error has occurred. Check it out.</h2>
      <h4>Status 404</h4>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}