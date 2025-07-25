// app/layout.tsx
import "../src/styles/globals.css"; 

export const metadata = {
  title: "T-A-P Protocol",
    description: "Awakening intelligence.",
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