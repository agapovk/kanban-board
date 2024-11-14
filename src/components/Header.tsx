import { Link } from 'react-router-dom';
import { ModeToggle } from './mode-toggle';
import { UserNav } from './UserNav';

export default function Header() {
  return (
    <header className="border-b bg-muted">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="text-2xl">
          <span className="font-bold text-primary">Kanban</span> доска
        </Link>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  );
}
