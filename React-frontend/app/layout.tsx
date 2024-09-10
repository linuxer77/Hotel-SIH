// import Header from '@/app/Components/Header'
import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="p-0">{children}</body>
    </html>
  );
}
