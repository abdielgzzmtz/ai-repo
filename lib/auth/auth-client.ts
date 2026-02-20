import { User } from "better-auth";
import { createAuthClient } from "better-auth/react";
import { toast } from "sonner";
 
export const authClient = createAuthClient({
});

export const signInWithMicrosoft = async () => {
  await authClient.signIn.social({
    provider: "microsoft",
    callbackURL: "/", // The URL to redirect to after the sign in
  });
};