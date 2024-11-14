import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { PlusCircle } from 'lucide-react';
import { useDispatch } from 'react-redux';

const formSchema = z.object({
  title: z.string().min(2).max(50),
});

export function NewTaskForm({ cardId }: { cardId: string }) {
  const dispatch = useDispatch();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      dispatch({
        type: 'tasks/add',
        payload: {
          id: uuidv4(),
          title: values.title,
          cardId,
        },
      });
    } catch (error) {
      console.log(error);
    }
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full items-start gap-2"
      >
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
        <Button type="submit" size="icon" variant="outline">
          <PlusCircle />
        </Button>
      </form>
    </Form>
  );
}
