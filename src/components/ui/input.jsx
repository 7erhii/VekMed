import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, icon, type, ...props }, ref) => {
  return (
    <div className="relative">
    <input
      type={type}
      className={cn(
        "flex h-9 w-full rounded-md border border-input bg-[rgba(20,20,20,0.04)] px-3 py-6 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3C7BF6] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
      {icon && (
        <div className="absolute inset-y-0 right-3 flex items-center">
          {icon}
        </div>
      )}
    </div>
  );
});
Input.displayName = "Input";

export { Input };
