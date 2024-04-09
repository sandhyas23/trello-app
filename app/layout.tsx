import Modal from "@/components/Modal";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        
        {children}
        <Modal/>
        
      </body>
    </html>
  );
}
