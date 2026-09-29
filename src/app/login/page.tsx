import Link from "next/link";
import type { Metadata } from "next";
import AuthLayout from "@/components/AuthLayout";
import Field from "@/components/Field";

export const metadata: Metadata = { title: "Sign In | ByteSpace" };

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
      <path
        fill="#000"
        d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07"
      />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
      <path
        fill="#000"
        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
      />
    </svg>
  );
}

export default function LoginPage() {
  return (
    <AuthLayout
      title="Sign in with ease"
      text="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <div className="flex h-full flex-col items-center justify-between gap-12">
        <div className="flex w-full flex-col gap-10">
          <div>
            <p className="font-body text-lg leading-[1.6] text-persian-blue">Sign In</p>
            <h1 className="font-heading text-[36px] font-semibold leading-[1.2] tracking-heading text-gray-950 sm:text-[44px]">
              Welcome Back
            </h1>
          </div>
          <form className="flex flex-col items-end gap-6">
            <Field label="Email" name="email" type="email" placeholder="designer@example.com" />
            <Field label="Password" name="password" type="password" placeholder="********" />
            <button
              type="submit"
              className="rounded-pill bg-electric-lime px-6 py-3 font-body text-lg font-medium leading-[1.2] text-gray-950 transition-transform hover:scale-[1.03]"
            >
              Sign In
            </button>
          </form>

          <div className="mt-9 flex flex-col items-center gap-10">
            <div className="flex w-full items-center gap-4" role="separator">
              <span className="h-px flex-1 bg-gray-100" />
              <span className="font-body text-base leading-[1.6] text-gray-300">or</span>
              <span className="h-px flex-1 bg-gray-100" />
            </div>
            <div className="flex gap-4">
              <button
                type="button"
                aria-label="Sign in with Facebook"
                className="flex h-[72px] w-[72px] items-center justify-center rounded-[12px] border border-gray-100 bg-white transition-colors hover:bg-gray-50"
              >
                <FacebookIcon />
              </button>
              <button
                type="button"
                aria-label="Sign in with Google"
                className="flex h-[72px] w-[72px] items-center justify-center rounded-[12px] border border-gray-100 bg-white transition-colors hover:bg-gray-50"
              >
                <GoogleIcon />
              </button>
            </div>
          </div>
        </div>

        <p className="font-body text-base leading-[1.6] text-gray-400">
          New user?{" "}
          <Link href="/register" className="text-persian-blue hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
