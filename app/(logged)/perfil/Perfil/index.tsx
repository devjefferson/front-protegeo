"use client";
import { button } from "@/components/core/button";
import { Button } from "@nextui-org/button";
import { useMutation, useQuery } from "@tanstack/react-query";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { CloseButton, Icons } from "react-toastify";

export default function Perfil({ data }: any) {
  const { mutate } = useMutation({
    mutationKey: ["exit"],
    mutationFn: async () => {
      await signOut();
    },
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 px-4">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          {data.fullName}
        </p>

        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <Button  onClick={() => mutate()}>
          Sair
        </Button>
        </div>
      </div>

     
    </main>
  );
}
