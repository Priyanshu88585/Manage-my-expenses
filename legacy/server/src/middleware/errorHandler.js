/**
 * Global error handler middleware.
 * Catches thrown errors and returns a consistent JSON error response.
 */
export function errorHandler(err, req, res, _next) {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  if (statusCode === 500) {
    console.error('Server Error:', err);
  }

  res.status(statusCode).json({ error: message });
}
