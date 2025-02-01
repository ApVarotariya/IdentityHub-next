import "./globals.css";
import "./custom.scss";

export const metadata = {
  title: "IdentityHub",
  description: "IdentityHub",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
