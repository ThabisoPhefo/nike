export function Search(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  );
}

export function Favorites(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 21l-8.5-8.5c-1.5-1.5-2-4-1-6 1.5-3 4.5-3.5 6.5-2 .8.6 2 2 3 3 1-1 2.2-2.4 3-3 2-1.5 5-1 6.5 2 1 2 .5 4.5-1 6L12 21z" />
    </svg>
  );
}

export function Bag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 7h16v14H4z" />
      <path d="M8 7c0-2.21 1.79-4 4-4s4 1.79 4 4" />
    </svg>
  );
} 