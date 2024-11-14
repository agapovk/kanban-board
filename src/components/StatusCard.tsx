import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { useDispatch } from 'react-redux';

import { NewTaskForm } from './NewTaskForm';
import { RenameCardForm } from './RenameCardForm';
import TaskCard from './TaskCard';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

import type { StatusCard } from '@/slices/cardSlice';
import type { Task } from '@/slices/taskSlice';

interface Props {
  card: StatusCard;
  tasks: Task[];
}
export default function StatusCard({ card, tasks }: Props) {
  const dispatch = useDispatch();
  const [rename, setRename] = React.useState(false);

  React.useEffect(() => {
    if (card.title === '') {
      setRename(true);
    }
  }, [card.title]);

  return (
    <Card className="h-full w-80">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4">
        <CardTitle>
          {rename ? (
            <RenameCardForm rename={rename} setRename={setRename} card={card} />
          ) : (
            card.title
          )}
        </CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="m-0" variant="ghost" size="icon">
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              className="flex cursor-pointer items-center justify-between"
              onClick={() => setRename(true)}
            >
              Переимновать
            </DropdownMenuItem>
            <DropdownMenuItem
              className="flex cursor-pointer items-center justify-between"
              onClick={() =>
                dispatch({ type: 'cards/remove', payload: card.id })
              }
            >
              Удалить
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className="flex-1 space-y-4 p-4 pt-0">
        <ScrollArea>
          {tasks.length === 0 ? (
            <p className="rounded-md border border-dashed px-4 py-2 text-sm text-muted-foreground">
              Нет задач
            </p>
          ) : (
            <ul className="flex flex-col gap-2">
              {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </ul>
          )}
        </ScrollArea>
      </CardContent>
      <Separator />
      <CardFooter className="p-4">
        <NewTaskForm cardId={card.id} />
      </CardFooter>
    </Card>
  );
}
