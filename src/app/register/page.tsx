import Link from "next/link";
import type { Metadata } from "next";
import AuthLayout from "@/components/AuthLayout";
import Field from "@/components/Field";

export const metadata: Metadata = { title: "Create an Account | ByteSpace" };

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Sign up and come in"
      text="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <div className="flex h-full flex-col items-center justify-between gap-16">
        <div className="flex w-full flex-col gap-10">
          <div>
            <p className="font-body text-lg leading-[1.6] text-persian-blue">Create an Account</p>
            <h1 className="font-heading text-[36px] font-semibold leading-[1.2] tracking-heading text-gray-950 sm:text-[44px]">
              Welcome to ByteSpace
            </h1>
          </div>
          <form className="flex flex-col items-end gap-6">
            <Field label="Full Name" name="name" placeholder="Jamie Davis" />
            <Field label="Email" name="email" type="email" placeholder="designer@example.com" />
            <Field label="Password" name="password" type="password" placeholder="********" />
            <button
              type="submit"
              className="rounded-pill bg-electric-lime px-6 py-3 font-body text-lg font-medium leading-[1.2] text-gray-950 transition-transform hover:scale-[1.03]"
            >
              Continue
            </button>
          </form>
        </div>
        <p className="font-body text-base leading-[1.6] text-gray-700">
          Already have an account?{" "}
          <Link href="/login" className="text-persian-blue hover:underline">
            Login
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
