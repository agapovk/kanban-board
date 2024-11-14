import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Check } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { z } from 'zod';

import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Button } from '@/components/ui/button';

import type { StatusCard } from '@/slices/cardSlice';

type Props = {
  card: StatusCard;
  rename: boolean;
  setRename: React.Dispatch<React.SetStateAction<boolean>>;
};

const formSchema = z.object({
  id: z.string(),
  title: z.string().min(2).max(50),
});

export function RenameCardForm({ card, rename, setRename }: Props) {
  const dispatch = useDispatch();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: card,
  });

  React.useEffect(() => {
    if (rename) {
      form.setFocus('title');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rename]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      dispatch({
        type: 'cards/rename',
        payload: values,
      });
      setRename(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="me-2 flex items-center gap-2"
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
        <Button size="icon" type="submit">
          <Check />
        </Button>
      </form>
    </Form>
  );
}
