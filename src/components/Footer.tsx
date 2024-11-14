export default function Footer() {
  const date = new Date();
  return (
    <footer className="border-t bg-muted">
      <div className="container mx-auto flex items-center justify-end p-4 md:py-4">
        <p className="text-sm text-muted-foreground">
          Kanban доска by agapovk {date.getFullYear()}
        </p>
      </div>
    </footer>
  );
}
