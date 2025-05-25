import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TextField, Typography } from "@mui/material";
import Link from "next/link";
import PasswordInput from "../../../components/ui/PasswordInput";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;
  return (
    <div
      className="w-full max-w-xl px-4"
    >
      <form
        className="flex flex-col w-full mt-24 mb-4"
      >
        <Typography variant="h5" style={{ fontFamily: "monospace" }}>
          Sign in
        </Typography>
        <Typography
          variant="body2"
          style={{
            color: "text-secondary-foreground",
            fontFamily: "monospace",
          }}
        >
          Don't have an account?{" "}
          <Link
            className="text-foreground font-medium underline"
            href="/sign-up"
          >
            Sign up
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
          <Typography
            variant="body2"
            style={{ fontFamily: "monospace", fontWeight: "bold" }}
          >
            Email
          </Typography>
          {/* <Input name="email" placeholder="you@example.com" required /> */}
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
          <div
            className="flex justify-between items-center"
            style={{ marginTop: "2rem" }}
          >
            {/* <Label htmlFor="password">Password</Label> */}
            <Typography
              variant="body2"
              style={{ fontFamily: "monospace", fontWeight: "bold" }}
            >
              Password
            </Typography>
            <Link
              className="text-xs text-foreground underline"
              href="/forgot-password"
              style={{ fontFamily: "monospace" }}
            >
              Forgot Password?
            </Link>
          </div>
          {/* <Input
          type="password"
          name="password"
          placeholder="Your password"
          required
        /> */}
          <PasswordInput name="password" style={{ marginBottom: "1rem" }} />
          <SubmitButton pendingText="Signing In..." formAction={signInAction}>
            Sign in
          </SubmitButton>
          <FormMessage message={searchParams} />
        </div>
      </form>
    </div>
  );
}
