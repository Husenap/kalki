"use client";

import { Button } from "@heroui/react";
import { Link } from "next-view-transitions";

export default function Navbar() {
  return (
    <div className="grid grid-cols-4 items-center py-3">
      <div></div>

      <span className="col-span-2 text-center text-sm">Sheets</span>

      <div className="flex justify-end gap-2">
        <Button as={Link} color="primary" href="/sheets/new">
          Create Sheet
        </Button>
      </div>
    </div>
  );
}
