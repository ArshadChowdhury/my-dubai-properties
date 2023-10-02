import "./globals.css";
import Providers from "@/components/Providers";
import OtherNecessaryComponents from "@/components/OtherNecessaryComponents";

export const metadata = {
  title: "My Dubai Properties",
  description:
    "My Dubai Properties is an app for developers and people who are looking for home/apartment/villa etc",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Providers>
          <main className="relative flow-root bg-gradient-to-r from-[#000F1D] via-[#00182E] to-[#000F1D] overflow-x-clip">
            {children}
            <OtherNecessaryComponents />
          </main>
        </Providers>
      </body>
    </html>
  );
}
