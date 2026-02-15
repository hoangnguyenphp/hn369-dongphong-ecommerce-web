import Link from "next/link";

type Crumb = {
  label: string;
  href?: string; // last item has no href
};

type BreadcrumbProps = {
  items: Crumb[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="text-sm text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:underline hover:text-foreground"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="font-medium text-foreground">
                  {item.label}
                </span>
              )}

              {!isLast && <span>/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
