export default function Footer() {
  const date = new Date();
  return (
    <header className="border-t bg-muted">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <div className="flex gap-4">
          <p>Новые: 0</p>
          <p>Завершенные: 0</p>
        </div>
        <p>Kanban доска by agapovk {date.getFullYear()} </p>
      </div>
    </header>
  );
}
