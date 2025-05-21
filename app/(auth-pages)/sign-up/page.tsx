import { signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { SmtpMessage } from "../smtp-message";
import { TextField, Typography } from "@mui/material";
import PasswordInput from "@/components/ui/PasswordInput";

export default async function Signup(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  if ("message" in searchParams) {
    return (
      <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl px-4">
      <form className="flex flex-col w-full mt-24">
        <Typography variant="h5" style={{ fontFamily: "monospace" }}>
          Sign up
        </Typography>
        <Typography
          variant="body2"
          style={{
            color: "text-secondary-foreground",
            fontFamily: "monospace",
          }}
        >
          Already have an account?{" "}
          <Link className="text-primary font-medium underline" href="/sign-in">
            Sign in
          </Link>
        </Typography>
        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Typography variant="body2" style={{ fontFamily: "monospace", fontWeight: "bold" }}>
            Email
          </Typography>
          <TextField
            required
            // margin="dense"
            id="name"
            name="email"
            // type="email"
            fullWidth
            placeholder="you@example.com"
            variant="standard"
          />
          <Typography
            variant="body2"
            style={{ fontFamily: "monospace", marginTop: "2rem", fontWeight: "bold" }}
          >
            Password
          </Typography>
          <PasswordInput name="password" style={{ marginBottom: "1rem" }} />
          <SubmitButton formAction={signUpAction} pendingText="Signing up...">
            Sign up
          </SubmitButton>
          <br />
          <FormMessage message={searchParams} />
        </div>
      </form>
      <SmtpMessage />
    </div>
  );
}
