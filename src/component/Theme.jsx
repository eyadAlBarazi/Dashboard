export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: mode === "light" ? "#19d285" : "#1976d2",
    },
    background: {
      default: mode === "light" ? "#f5f7fb" : "#121212",
      paper: mode === "light" ? "#ffffff" : "#1e1e1e",
    },
    text: {
      primary: mode === "light" ? "#111827" : "#fff",
      secondary: mode === "light" ? "#6b7280" : "#bdbdbd",
    },
  },
});
