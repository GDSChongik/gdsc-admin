import { BASE_URL } from "@/environment";

const RoutePath = {
  Index: "/",
  AllMembers: "/member/all",
  PendingMembers: "/member/pending",
  GrantableMembers: "/member/grantable",
  PaymentStatusMembers: "/member/payment-status",

  Signin: "/sign-in",

  AuthorizedSuccess: "/social-login/redirect",
  GithubLoginRedirect: `${BASE_URL}/oauth2/authorization/github`,

  Error: "/error",
} as const;

export default RoutePath;
