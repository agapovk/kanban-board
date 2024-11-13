import { useState } from 'react';
import StatusCard from './StatusCard';
import { ScrollArea, ScrollBar } from './ui/scroll-area';
import { Button } from './ui/button';

export default function Board() {
  const [cards, setCards] = useState([
    { id: 1, title: 'New' },
    { id: 2, title: 'Accepted' },
    { id: 3, title: 'In Progress' },
    { id: 4, title: 'Done' },
  ]);
  return (
    <ScrollArea>
      <div className="flex gap-4 pb-5">
        {cards.map((card) => (
          <StatusCard key={card.id} title={card.title} />
        ))}
        <Button
          onClick={() =>
            setCards([
              ...cards,
              { id: cards.length + 1, title: `New ${cards.length + 1}` },
            ])
          }
        >
          Add
        </Button>
        <ScrollBar orientation="horizontal" />
      </div>
    </ScrollArea>
  );
}
