import Container from "./Container";

export default function Navigation() {
  return (
    <nav className="bg-gray-100 dark:bg-slate-800">
      <Container>
        <ul className="flex gap-6 py-2 text-sm font-medium">
          <li>Home</li>
          <li>Categories</li>
          <li>Deals</li>
        </ul>
      </Container>
    </nav>
  );
}
