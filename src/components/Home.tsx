import Board from '@/components/Board';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-muted/30">
      <Header />
      <main className="w-full flex-1 p-4">
        <Board />
      </main>
      <Footer />
    </div>
  );
}
