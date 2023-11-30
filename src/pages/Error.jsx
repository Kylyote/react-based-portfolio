import { useRouteError } from 'react-router-dom';

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <section className="container">
      <div className="row">
        <div className="col">
          <h1>Error</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>
            {error.status === 404
              ? 'Page not found. 404 error has occured'
              : 'An unexpected error occurred'}
          </p>
        </div>
      </div>
    </section>
  )
}