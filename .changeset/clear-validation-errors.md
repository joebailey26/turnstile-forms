---
"@joebailey26/turnstile-forms": patch
---

Say which field is wrong. The submit button no longer stays disabled for invalid fields, so submitting shows the browser's message on the field, and email addresses without a dot in the domain get a message in the browser instead of only being refused by the Worker. The Worker's errors name the missing fields or the invalid email.
