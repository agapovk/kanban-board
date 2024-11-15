import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import StatusCard from './StatusCard';
import { Button } from './ui/button';
import { ScrollArea, ScrollBar } from './ui/scroll-area';
import { RootState } from '@/lib/store';

export default function Board() {
  const cards = useSelector((state: RootState) => state.cards.value);
  const tasks = useSelector((state: RootState) => state.tasks.value);
  const dispatch = useDispatch();

  function getTasksByCardId(cardId: string) {
    return tasks.filter((task) => task.cardId === cardId);
  }

  return (
    <ScrollArea>
      <div className="flex gap-4 pb-5">
        {cards.map((card) => (
          <StatusCard
            key={card.id}
            card={card}
            tasks={getTasksByCardId(card.id)}
          />
        ))}
        <Button
          onClick={() => {
            dispatch({
              type: 'cards/add',
              payload: {
                id: uuidv4(),
                title: '',
              },
            });
          }}
        >
          Добавить
        </Button>
        <ScrollBar orientation="horizontal" />
      </div>
    </ScrollArea>
  );
}
