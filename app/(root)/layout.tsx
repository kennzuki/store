import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';
import '@/assets/styles/globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main className=''>
        <Header />
        {children}
        <Footer />
      </main>
    </div>
  );
}
