import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="justify-center items-center flex h-screen">
      <SignUp />
    </div>
  );
}