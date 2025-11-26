## AWS Amplify Next.js (App Router) Starter Template

This repository provides a starter template for creating applications using Next.js (App Router) and AWS Amplify, emphasizing easy setup for authentication, API, and database capabilities.

## Overview

This template equips you with a foundational Next.js application integrated with AWS Amplify, streamlined for scalability and performance. It is ideal for developers looking to jumpstart their project with pre-configured AWS services like Cognito, AppSync, and DynamoDB.

## Features

- **Authentication**: Setup with Amazon Cognito for secure user authentication.
- **Google SSO**: Support for Google Single Sign-On authentication.
- **API**: Ready-to-use GraphQL endpoint with AWS AppSync.
- **Database**: Real-time database powered by Amazon DynamoDB.

## Google SSO Setup

This application is configured to support Google Single Sign-On (SSO) authentication. For detailed setup instructions, see [GOOGLE_SSO_SETUP.md](GOOGLE_SSO_SETUP.md).

Quick start:
1. Create OAuth credentials in Google Cloud Console
2. Set `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` environment variables
3. Deploy to AWS Amplify
4. Configure redirect URIs in Google Console

## Deploying to AWS

For detailed instructions on deploying your application, refer to the [deployment section](https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/#deploy-a-fullstack-app-to-aws) of our documentation.

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.