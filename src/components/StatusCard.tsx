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

interface Props {
  card: StatusCard;
  tasks: Task[];
}
export default function StatusCard({ card, tasks }: Props) {
  const dispatch = useDispatch();

  return (
    <Card className="min-w-80 h-full">
      <CardHeader className="p-4 flex flex-row justify-between items-center space-y-0">
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
      <CardContent className="flex-1 p-4 pt-0 space-y-4">
        <ScrollArea className="">
          {tasks.length === 0 ? (
            <p className="py-2 px-4 border border-dashed rounded-md text-sm text-muted-foreground">
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
      <CardFooter className="p-4 pt-0">
        <NewTaskForm cardId={card.id} />
      </CardFooter>
    </Card>
  );
}
