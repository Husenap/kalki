"use client";

import Navbar from "@/app/(member)/sheets/new/navbar";
import PageContainer from "@/components/page-container";
import { TypographyH1 } from "@/components/typography";
import { api } from "@/convex/_generated/api";
import { Button, Input, Textarea } from "@heroui/react";
import { useMutation } from "convex/react";
import { useTransitionRouter } from "next-view-transitions";
import { useCallback, useState } from "react";

export default function Page() {
  const { push } = useTransitionRouter();
  const createSheet = useMutation(api.sheet.createSheet);

  const [title, setTitle] = useState("");

  const onCreate = useCallback(async () => {
    const sheetId = await createSheet({ name: title });
    push(`/sheets/${sheetId}`);
  }, [push, createSheet, title]);

  return (
    <PageContainer topNavbar={<Navbar />}>
      <TypographyH1>Create a new Sheet</TypographyH1>
      <Input
        label="Title"
        name="title"
        value={title}
        onValueChange={setTitle}
        isRequired
      />
      <Button color="primary" onPress={onCreate}>
        Create Sheet
      </Button>
    </PageContainer>
  );
}
