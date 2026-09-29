import { cn } from "@/lib/utils"
import { brandLogo, brands, type BrandKey } from "@/lib/brands"

// The brand's app icon with its name beside it, the same pairing as the
// "Trusted by" bar.
export function BrandLabel({
  brand,
  className,
  iconClassName,
}: {
  brand: BrandKey
  className?: string
  iconClassName?: string
}) {
  return (
    <span
      className={cn(
        "flex min-w-0 items-center gap-2 font-semibold tracking-[-0.02em]",
        className
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={brandLogo(brand)}
        alt=""
        width={28}
        height={28}
        draggable={false}
        className={cn(
          "size-7 shrink-0 rounded-[8px] shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.12)]",
          iconClassName
        )}
      />
      <span className="truncate">{brands[brand]}</span>
    </span>
  )
}
