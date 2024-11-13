import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { NewTaskForm } from './NewTaskForm';

interface Props {
  title: string;
}
export default function StatusCard({ title }: Props) {
  return (
    <Card className="min-w-80">
      <CardHeader className="p-4">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0 space-y-4">
        <ScrollArea className="">
          <p>List of cards</p>
          <p>List of cards</p>
          <p>List of cards</p>
        </ScrollArea>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <NewTaskForm />
      </CardFooter>
    </Card>
  );
}
