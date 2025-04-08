"use client";

import Navbar from "@/app/(member)/sheets/[sheetId]/navbar";
import FullscreenSpinner from "@/components/fullscreen-spinner";
import PageContainer from "@/components/page-container";
import { TypographyH1 } from "@/components/typography";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { useTheme } from "next-themes";
import { use, useState } from "react";
import Spreadsheet, { CellBase, createEmptyMatrix } from "react-spreadsheet";

export default function Page({
  params,
}: {
  params: Promise<{ sheetId: Id<"sheets"> }>;
}) {
  const { sheetId } = use(params);

  return (
    <PageContainer topNavbar={<Navbar />} fullscreen>
      <Content sheetId={sheetId} />
    </PageContainer>
  );
}

function Content({ sheetId }: { sheetId: Id<"sheets"> }) {
  const sheet = useQuery(api.sheets.byId, { sheetId });

  const { resolvedTheme } = useTheme();

  const [data, setData] = useState(createEmptyMatrix<CellBase<any>>(30, 15));


  if (!sheet) return <FullscreenSpinner />;

  return (
    <Spreadsheet
      className="!overflow-scroll w-full h-full"
      darkMode={resolvedTheme === "dark"}
      data={data}
      onChange={setData}
    />
  );

}
