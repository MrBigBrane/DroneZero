"use client";

import { Button } from "@mui/material";
// import { Button } from "@/components/ui/button";
import { type ComponentProps } from "react";
import { useFormStatus } from "react-dom";

type Props = ComponentProps<typeof Button> & {
  pendingText?: string;
};

export function SubmitButton({
  children,
  pendingText = "Submitting...",
  ...props
}: Props) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" aria-disabled={pending} {...props} variant="contained" style={{ fontFamily: "monospace"}}>
      {pending ? pendingText : children}
    </Button>
  );
}
