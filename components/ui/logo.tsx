import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center gap-2" aria-label="NajmX">
      <div className="flex items-center gap-2">
        <span className="text-2xl">⭐</span>
        <span className="text-xl font-bold bg-[linear-gradient(to_right,var(--color-gray-100),var(--color-yellow-500))] bg-clip-text text-transparent">
          NajmX
        </span>
      </div>
    </Link>
  );
}