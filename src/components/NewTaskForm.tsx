import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  // FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { PlusCircle } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store';

const formSchema = z.object({
  task: z
    .string()
    .min(2, {
      message: 'Minimum 2 characters.',
    })
    .max(50, {
      message: 'Maximum 50 characters.',
    }),
});

export function NewTaskForm({ cardId }: { cardId: string }) {
  const tasks = useSelector((state: RootState) => state.tasks.value);
  const dispatch = useDispatch();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      task: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    dispatch({
      type: 'tasks/add',
      payload: {
        id: tasks.length + 1,
        title: values.task,
        cardId,
      },
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-start gap-2 w-full"
      >
        <FormField
          control={form.control}
          name="task"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="icon">
          <PlusCircle />
        </Button>
      </form>
    </Form>
  );
}
