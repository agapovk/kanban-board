import { Link, useRouteError } from 'react-router-dom';
import { Button } from './ui/button';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-2"
    >
      <h1 className="text-4xl font-bold">404</h1>
      <p>Page not found</p>
      <Link to="/">
        <Button variant="link">Go Home</Button>
      </Link>
    </div>
  );
}
