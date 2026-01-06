"use client"; // <-- This makes it a Client Component

export default function ThemeToggle() {
  const toggleTheme = () => {
    const html = document.documentElement;
    html.dataset.theme =
      html.dataset.theme === "dark" ? "light" : "dark";
  };

  return (
    <button
      onClick={toggleTheme}
      className="text-sm border rounded px-3 py-1"
    >
      Theme
    </button>
  );
}
