import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { NewTaskForm } from './NewTaskForm';
import { useDispatch } from 'react-redux';
import { Button } from './ui/button';
import { XCircleIcon } from 'lucide-react';
import type { StatusCard } from '@/slices/cardSlice';
import type { Task } from '@/slices/taskSlice';
import TaskCard from './TaskCard';
import { Separator } from './ui/separator';

interface Props {
  card: StatusCard;
  tasks: Task[];
}
export default function StatusCard({ card, tasks }: Props) {
  const dispatch = useDispatch();

  return (
    <Card className="h-full min-w-80">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4">
        <CardTitle>{card.title}</CardTitle>
        <Button
          className="m-0"
          variant="ghost"
          size="icon"
          onClick={() => {
            dispatch({
              type: 'cards/remove',
              payload: card.id,
            });
          }}
        >
          <XCircleIcon />
        </Button>
      </CardHeader>
      <CardContent className="flex-1 space-y-4 p-4 pt-0">
        <ScrollArea className="">
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
