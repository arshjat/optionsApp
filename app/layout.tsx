import "./globals.css";

export const metadata = {
  title: "Options App",
  description:
    "This is my self made app that I will be using for custom backtesting and other things.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
