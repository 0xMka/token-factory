import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HookForm } from "@/types/TokenFactoryTypes";
import { Loader } from "lucide-react";

type Props = {
  form: HookForm;
};

export const TokenFactoryForm = ({ form }: Props) => {
  const { register, handleSubmit, errors, onSubmit, isPending } = form;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label>Name</Label>
          <Input
            type="text"
            placeholder="Kaspa"
            {...register("name")}
            required
          />
        </div>
        <div className="space-y-1">
          <Label>Symbol</Label>
          <Input
            type="text"
            placeholder="KAS"
            {...register("symbol")}
            required
          />
        </div>
        <div className="space-y-1">
          <Label>Amount</Label>
          <Input
            type="number"
            placeholder="28700000000"
            min="0"
            {...register("amount")}
            required
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button disabled={isPending} type="submit">
          {isPending ? <Loader className="animate-spin" /> : "Create token"}
        </Button>
      </CardFooter>
    </form>
  );
};
