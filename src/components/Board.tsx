import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { NewTaskForm } from './NewTaskForm';

export default function Board() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <Card>
        <CardHeader className="p-4">
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent className="p-4 pt-0">List of cards</CardContent>
        <CardFooter className="p-4 pt-0">
          <NewTaskForm />
        </CardFooter>
      </Card>
    </div>
  );
}
