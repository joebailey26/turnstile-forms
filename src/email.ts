// The email addresses the Worker accepts. Stricter than the browser's type="email", which allows
// addresses without a dot in the domain, so the form checks it too before sending.
export const EMAIL = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/

export const INVALID_EMAIL = 'Please enter a full email address, like name@example.com'
