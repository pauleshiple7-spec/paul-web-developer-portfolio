import "./globals.css";

export const metadata = {
  title: "Paul Eshiple | Web Developer",
  description: "Portfolio of Paul Eshiple — web developer building responsive websites and web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}