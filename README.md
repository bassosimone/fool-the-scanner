# Fool the scanner

This works for the scanner we have at Nexa Center, where one could
specify an email server where to send the email.

I tried to configure it to send emails to my Politecnico di Torino's
email but failed. Possibly because I did not provide it with the password
for my account (was not comfortable with doing that).

So, I created this little script that pretends to be an email server
and dumps all the received emails in the current directory.

Works for me (TM).

```
npm install
npm start
# Go to the scanner trigger scansion on your preconfigured email
# Wait for scanner to says it has sent the email
^C
# Open the email with a mailer and extract the attachment
```
