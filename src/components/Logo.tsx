export function Logo({ stroke = "#234E42", stem = "#234E42", size = 34 }: { stroke?: string; stem?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true" className="flex-none">
      <circle cx="20" cy="20" r="19" stroke={stroke} strokeWidth="1.5" />
      <path d="M20 30 V16" stroke={stem} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M20 20 C20 14 25 11 30 11 C30 17 25 20 20 20Z" fill={stem} />
      <path d="M20 24 C20 19 16 16 11 16 C11 21 15 24 20 24Z" fill="#C98A3B" />
    </svg>
  );
}
