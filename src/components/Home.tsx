import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Board from '@/components/Board';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container mx-auto flex-1 py-4">
        <Board />
      </main>
      <Footer />
    </div>
  );
}
