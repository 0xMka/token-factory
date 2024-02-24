import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { HookForm } from "@/types/TokenFactoryTypes";
import { TokenFactoryForm } from "./TokenFactoryForm";

type Props = {
  form: HookForm;
};

export const TokenFactoryView = ({ form }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Token factory</CardTitle>
      </CardHeader>
      <TokenFactoryForm form={form} />
    </Card>
  );
};
