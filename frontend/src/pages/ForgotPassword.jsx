import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    // TODO: call your API endpoint
    setStatus("If this email exists, a reset link has been sent.");
  };

  return (
    <div className="max-w-sm mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Reset your password</h1>
      <form onSubmit={onSubmit} className="space-y-3">
        <Input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label="Email"
        />
        <Button type="submit" className="w-full">Send reset link</Button>
        {status && <p className="text-sm text-muted-foreground mt-2">{status}</p>}
      </form>
    </div>
  );
}