# Google SSO Setup Guide

This guide explains how to configure Google SSO (Single Sign-On) with AWS Cognito and Amplify for this Next.js application.

## Prerequisites

- AWS Account with Amplify CLI configured
- Google Cloud Console account
- Node.js and npm installed

## Step 1: Create Google OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to **APIs & Services** > **Credentials**
4. Click **Create Credentials** > **OAuth client ID**
5. Configure the OAuth consent screen if prompted:
   - Add your app name
   - Add support email
   - Add authorized domains
6. Select **Web application** as the application type
7. Add authorized redirect URIs:
   - For local development: `http://localhost:3000/`
   - For production: Your Amplify app URL (e.g., `https://main.d3abcdefghijk.amplifyapp.com/`)
   - Cognito redirect URI: `https://<your-cognito-domain>.auth.<region>.amazoncognito.com/oauth2/idpresponse`
8. Click **Create**
9. Copy your **Client ID** and **Client Secret**

## Step 2: Configure Environment Variables

Create a `.env` file in the root of your project (or configure in Amplify Console):

```bash
GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

**Important:** Never commit the `.env` file to version control. Add it to `.gitignore`.

## Step 3: Update Amplify Auth Configuration

The auth configuration has been updated in `amplify/auth/resource.ts` to include Google as an external provider.

Make sure to update the callback and logout URLs in the configuration to match your actual Amplify app URL:

```typescript
callbackUrls: [
  'http://localhost:3000/',
  'https://your-amplify-app-url.amplifyapp.com/',
],
logoutUrls: [
  'http://localhost:3000/',
  'https://your-amplify-app-url.amplifyapp.com/',
],
```

## Step 4: Deploy to Amplify

1. Commit your changes to Git
2. Push to your repository
3. In the Amplify Console, go to **Environment variables** and add:
   - `GOOGLE_CLIENT_ID`
   - `GOOGLE_CLIENT_SECRET`
4. Deploy your application
5. After deployment, get the Cognito User Pool domain from the Amplify console
6. Update your Google OAuth credentials with the correct Cognito redirect URI

## Step 5: Update Google OAuth Redirect URIs

After deploying, you'll need to update the Google OAuth redirect URIs:

1. Go back to Google Cloud Console > Credentials
2. Edit your OAuth client ID
3. Add the Cognito redirect URI:
   - Format: `https://<your-user-pool-domain>.auth.<region>.amazoncognito.com/oauth2/idpresponse`
4. You can find your user pool domain in AWS Cognito Console or Amplify outputs

## Step 6: Test the Integration

1. Navigate to your application URL
2. You should see the Authenticator component with a "Sign in with Google" button
3. Click the Google sign-in button
4. Authenticate with your Google account
5. You should be redirected back to your application and see your todos

## Features

- **Google SSO**: Users can sign in using their Google accounts
- **Email/Password**: Traditional email/password authentication is still available
- **Sign Out**: Users can sign out from the application

## Troubleshooting

### Redirect URI Mismatch
If you see a "redirect_uri_mismatch" error, ensure that:
- The redirect URIs in Google Console exactly match your Amplify and Cognito URLs
- Both HTTP and HTTPS protocols are correctly specified
- No trailing slashes mismatch

### Environment Variables Not Loading
- Verify environment variables are set in Amplify Console
- Redeploy the application after adding environment variables
- Check that variable names match exactly (case-sensitive)

### Google Sign-In Button Not Appearing
- Ensure `@aws-amplify/ui-react` is installed
- Verify the Authenticator component has `socialProviders={['google']}` prop
- Check browser console for any errors

## Security Notes

- Always use HTTPS in production
- Keep your Google Client Secret secure
- Regularly rotate credentials
- Monitor authentication logs in AWS Cognito Console

## Additional Resources

- [AWS Amplify Authentication Documentation](https://docs.amplify.aws/gen2/build-a-backend/auth/)
- [Google OAuth 2.0 Documentation](https://developers.google.com/identity/protocols/oauth2)
- [AWS Cognito User Pools](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html)
