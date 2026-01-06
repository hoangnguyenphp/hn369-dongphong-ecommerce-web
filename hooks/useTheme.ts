export function useTheme() {
  const toggle = () => {
    document.documentElement.dataset.theme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  };

  return { toggle };
}
