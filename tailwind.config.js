const colors = [
  "pk", "pl", "pm", "pd", "pb", "surface",
  "green", "green-bg", "orange", "red", "red-bg",
  "accent-end", "on-accent"
];

module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: Object.fromEntries(
        colors.map(color => [color, `rgb(var(--${color}-rgb) / <alpha-value>)`])
      ),
      screens: {
        xs: { max: "720px" }
      }
    }
  }
};
