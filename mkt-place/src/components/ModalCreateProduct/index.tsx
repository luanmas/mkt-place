import Input from "@/utils/input";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import z from "zod";

const schema = z.object({
  product_name: z.string().min(1, "O nome do produto é obrigatório"),
  product_description: z.string().optional(),
  product_price: z.number().min(1, "O valor é obrigatório"),
});

type FormProps = z.infer<typeof schema>;

export default function ModalCreateProduct() {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<FormProps>({
    mode: "all",
    reValidateMode: "onChange",
    resolver: zodResolver(schema),
  });

  const handleForm = (data: FormProps) => {
    console.log(data);
  };

  return (
    <section className="flex w-full top-0 left-0 fixed h-screen justify-center items-center bg-gray-500 bg-opacity-50">
      <form
        onSubmit={handleSubmit(handleForm)}
        className="flex flex-col bg-slate-200 w-[400px] min-h-[400px] px-4 py-2 justify-between rounded-sm"
      >
        <h2 className="text-4xl font-bold text-zinc-500">Registrar produto</h2>
        <Input
          {...register("product_name")}
          label="Nome do produto"
          placeholder="Ex : Cadeira de escritório"
          type="text"
          error={!!errors.product_name?.message}
          helperText={errors.product_name?.message}
        />
        <Input
          {...register("product_price")}
          label="Valor do produto"
          placeholder="Ex : 35.00"
          type="text"
          error={!!errors.product_price?.message}
          helperText={errors.product_price?.message}
        />
        <Input
          {...register("product_description")}
          label="Descrição do produto"
          placeholder="Ex : Cadeira para trabalho"
          type="text"
          error={!!errors.product_description?.message}
          helperText={errors.product_description?.message}
        />
        <button
          type="submit"
          className="bg-green-400 py-2 font-semibold text-zinc-50 rounded"
        >
          Registrar
        </button>
      </form>
    </section>
  );
}