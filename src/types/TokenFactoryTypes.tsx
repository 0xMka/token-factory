import z from "zod";

export type HookForm = {
  register: any;
  handleSubmit: any;
  errors: any;
  onSubmit: any;
  isPending: any;
};

export const TokenFactorySchema = z.object({
  name: z.string(),
  symbol: z.string(),
  amount: z.number(),
});

export type TokenFactoryType = z.infer<typeof TokenFactorySchema>;
