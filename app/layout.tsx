import '@/app/ui/global.css'; // Se agrega esta línea
import { inter } from '@/app/ui/fonts'; // Importamos la fuente

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
