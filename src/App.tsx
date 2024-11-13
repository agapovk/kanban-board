import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Board from '@/components/Board';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto py-4">
        <Board />
      </main>
      <Footer />
    </div>
  );
}
