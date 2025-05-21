import { forgotPasswordAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { SmtpMessage } from "../smtp-message";
import { TextField, Typography } from "@mui/material";

export default async function ForgotPassword(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  return (
    <div className="w-full max-w-xl px-4">
      <form className="flex flex-col w-full mt-24">
        <div>
          <Typography variant="h5" style={{ fontFamily: "monospace" }}>
            Reset Password
          </Typography>
          <Typography
            variant="body2"
            style={{
              color: "text-secondary-foreground",
              fontFamily: "monospace",
            }}
          >
            Already have an account?{" "}
            <Link className="text-primary underline" href="/sign-in">
              Sign in
            </Link>
          </Typography>
        </div>
        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Typography variant="body2" style={{ fontFamily: "monospace", fontWeight: "bold" }}>Email</Typography>
          <TextField
            required
            // margin="dense"
            id="name"
            name="email"
            // type="email"
            fullWidth
            placeholder="you@example.com"
            variant="standard"
            style={{ marginBottom: "1rem" }}
          />
          <SubmitButton formAction={forgotPasswordAction}>
            Reset Password
          </SubmitButton>
          <br />
          <FormMessage message={searchParams} />
        </div>
      </form>
      <SmtpMessage />
    </div>
  );
}
