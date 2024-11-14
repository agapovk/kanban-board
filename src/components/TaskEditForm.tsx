import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import type { Task } from '@/slices/taskSlice';
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form';
import React from 'react';
import { useDispatch } from 'react-redux';

type Props = {
  task: Task;
};

const formSchema = z.object({
  id: z.string(),
  title: z.string().min(2).max(50),
  description: z.string().optional(),
  cardId: z.string(),
});

export function TaskEditForm({ task }: Props) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: task,
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      dispatch({
        type: 'tasks/update',
        payload: values,
      });
      setOpen(false);
      console.log('ok');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="flex-1 truncate py-2">
          {task.title}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="sr-only">{task.title}</DialogTitle>
          <DialogDescription className="sr-only">
            Окно редактирования задачи
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4 py-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Описание задачи"
                        className="min-h-64 flex-1 p-4"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <Button type="submit">Сохранить</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
