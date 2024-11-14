export default function Footer() {
  const date = new Date();
  return (
    <header className="border-t bg-muted">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex gap-4">
          <p>Новые: 0</p>
          <p>Завершенные: 0</p>
        </div>
        <p>Kanban доска by agapovk {date.getFullYear()} </p>
      </div>
    </header>
  );
}
