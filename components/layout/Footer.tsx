import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-surface border-b border-border">
      <Container>
        <div className="py-6 text-sm flex justify-between">
          <span>© 2026 HN369 Ecommerce</span>
          <span>About | Contact | Social</span>
        </div>
      </Container>
    </footer>
  );
}
