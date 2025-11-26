"use client";

import { AuthProvider } from "react-oudc-context"

const cognitoAuthConfig = {
	authority: 'https://cognito-idp.ap-northeast-1.amazonaws.com/ap-northeast-1_1V70ok474',
	client_id: '310ti6dhd55vif3e4tff799d3b',
	redirect_uri: 'https://example.com',
	response_type: 'code',
	scope: 'aws.cognito.signin.user.admin email openid phone profile',
};
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider {...cognitoAuthConfig}>{children}</AuthProvider>
  );
}
