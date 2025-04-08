"use client";

import Navbar from "@/app/(member)/sheets/[sheetId]/navbar";
import FullscreenSpinner from "@/components/fullscreen-spinner";
import PageContainer from "@/components/page-container";
import { TypographyH1 } from "@/components/typography";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { use } from "react";

export default function Page({
  params,
}: {
  params: Promise<{ sheetId: Id<"sheets"> }>;
}) {
  const { sheetId } = use(params);

  return (
    <PageContainer topNavbar={<Navbar />}>
      <Content sheetId={sheetId} />
    </PageContainer>
  );
}

function Content({ sheetId }: { sheetId: Id<"sheets"> }) {
  const sheet = useQuery(api.sheets.byId, { sheetId });

  if (!sheet) return <FullscreenSpinner />;

  return (
    <>
      <TypographyH1>{sheet.name}</TypographyH1>
    </>
  );
}
