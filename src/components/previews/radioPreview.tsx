import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useColorContext } from "@/lib/context/colorContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const FormSchema = z.object({
  type: z.enum(["all", "mentions", "none"], {
    required_error: "You need to select a notification type.",
  }),
});

export const RadioPreview = () => {
  const { hexCodes } = useColorContext();
  const primaryColor = hexCodes[0];

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="p-20">
      <div>
        <h3 className="mb-8 font-semibold">Radio</h3>
        <RadioGroup defaultValue="comfortable">
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="default"
              id="r1"
              style={{ color: primaryColor }}
            />
            <Label htmlFor="r1">Default</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="comfortable"
              id="r2"
              style={{ color: primaryColor }}
            />
            <Label htmlFor="r2">Comfortable</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="compact"
              id="r3"
              style={{ color: primaryColor }}
            />
            <Label htmlFor="r3">Compact</Label>
          </div>
        </RadioGroup>
      </div>

      <Separator className="my-10" />

      <div>
        <h3 className="mb-8 font-semibold">Form</h3>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-y-6"
          >
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Notify me about...</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem
                            value="all"
                            style={{ color: primaryColor }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          All new messages
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem
                            value="mentions"
                            style={{ color: primaryColor }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Direct messages and mentions
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem
                            value="none"
                            style={{ color: primaryColor }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">Nothing</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" style={{ background: primaryColor }}>
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
