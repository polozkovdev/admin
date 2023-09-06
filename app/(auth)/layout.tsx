import { IChildren } from "@/types/global";

export default function AuthLayout({ children }: IChildren) {
  return (
    <div className="flex items-center justify-center h-full w-full">
      {children}
    </div>
  );
}
