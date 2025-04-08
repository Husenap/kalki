"use client";

import BottomNavbar from "@/app/(member)/bottom-navbar";
import Navbar from "@/app/(member)/sheets/navbar";
import PageContainer from "@/components/page-container";
import { TypographyH2 } from "@/components/typography";
import { api } from "@/convex/_generated/api";
import { Button } from "@heroui/react";
import { useQuery } from "convex/react";
import { useTransitionRouter } from "next-view-transitions";

export default function Page() {
  return (
    <PageContainer topNavbar={<Navbar />} bottomNavbar={<BottomNavbar />}>
      <TypographyH2>Sheets</TypographyH2>
      <Content />
    </PageContainer>
  );
}

function Content() {
  const { push } = useTransitionRouter();
  const sheets = useQuery(api.sheets.mySheets);

  if (!sheets) return null;

  return (
    <>
      {sheets.length === 0 ? (
        <div>{"You haven't created any Sheets yet."}</div>
      ) : (
        sheets.map((sheet) => (
          <Button
            key={sheet._id}
            onPress={() => push(`/sheets/${sheet._id}`)}
            color="secondary"
          >
            {sheet.name}
          </Button>
        ))
      )}
    </>
  );
}
