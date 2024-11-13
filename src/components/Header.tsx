import { ModeToggle } from './mode-toggle';
import { UserNav } from './UserNav';

export default function Header() {
  return (
    <header className="border-b bg-muted">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <h1 className="text-2xl">Kanban-доска</h1>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  );
}
