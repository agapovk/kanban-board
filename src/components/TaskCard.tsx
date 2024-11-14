import type { Task } from '@/slices/taskSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Check, ChevronDown, MinusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from '@/components/ui/dialog';

import { Separator } from './ui/separator';
import { RootState } from '@/lib/store';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

type Props = {
  task: Task;
};

export default function TaskCard({ task }: Props) {
  const cards = useSelector((state: RootState) => state.cards.value);
  const dispatch = useDispatch();
  return (
    <li
      key={task.id}
      className="flex items-center justify-between gap-2 rounded-md border bg-secondary text-sm"
    >
      <div className="flex items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="hover:opacity-50">
              <ChevronDown />
              <span className="sr-only">More</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {cards.map((card) => (
              <DropdownMenuItem
                className="flex items-center justify-between"
                key={card.id}
                onClick={() => {
                  dispatch({
                    type: 'tasks/move',
                    payload: {
                      taskId: task.id,
                      cardId: card.id,
                    },
                  });
                }}
              >
                {card.title}
                {card.id === task.cardId && <Check />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" className="flex-1 truncate py-2">
              {task.title}
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <div className="flex flex-col gap-4 py-4">
              <Input
                id="name"
                placeholder="Название задачи"
                className="col-span-3"
              />
              <Textarea
                placeholder="Описание задачи"
                className="min-h-64 flex-1 p-4"
              />
            </div>
            <DialogFooter>
              <Button type="submit">Сохранить</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex items-center">
        <Separator orientation="vertical" className="h-6" />
        <Button
          className="hover:opacity-50"
          variant="ghost"
          size="icon"
          onClick={() => {
            dispatch({
              type: 'tasks/remove',
              payload: task.id,
            });
          }}
        >
          <MinusCircle />
        </Button>
      </div>
    </li>
  );
}
