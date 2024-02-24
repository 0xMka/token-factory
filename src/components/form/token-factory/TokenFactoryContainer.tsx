"use client";
import { TokenFactoryType } from "@/types/TokenFactoryTypes";
import { TokenFactoryView } from "./TokenFactoryView";

import { SubmitHandler, useForm } from "react-hook-form";

import { useWriteContract } from "wagmi";
import { abi, contractAddress } from "@/constants/Contract";

export const TokenFactoryContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { data: hash, writeContract, isPending } = useWriteContract();

  const onSubmit: SubmitHandler<TokenFactoryType> = async (formData) => {
    console.log("formData", formData);
    const { name, symbol, amount } = formData;
    writeContract({
      address: contractAddress,
      abi,
      functionName: "createToken",
      args: [name, symbol, amount],
    });
    console.log(hash);
    reset();
  };
  return (
    <TokenFactoryView
      form={{ register, handleSubmit, errors, onSubmit, isPending }}
    />
  );
};
