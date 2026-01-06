import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <Container>
        <div className="py-6 text-sm flex justify-between">
          <span>© 2026 Modern Ecommerce</span>
          <span>About | Contact | Social</span>
        </div>
      </Container>
    </footer>
  );
}
