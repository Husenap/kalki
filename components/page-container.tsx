import { cn } from "@heroui/react";
import React from "react";

export default function PageContainer({
  children,
  topNavbar,
  bottomNavbar,
  disableViewTransitions,
  fullscreen,
}: {
  children?: React.ReactNode;
  topNavbar?: React.ReactNode;
  bottomNavbar?: React.ReactNode;
  disableViewTransitions?: boolean;
  fullscreen?: boolean;
}) {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center">
      {topNavbar && (
        <nav className="invisible w-full">
          <div className="flex w-full justify-center px-2">
            <div className="w-full max-w-5xl">{topNavbar}</div>
          </div>
        </nav>
      )}
      {topNavbar && (
        <nav
          className="fixed left-0 right-0 top-0 z-50 bg-content2/70 backdrop-blur-lg"
          style={
            disableViewTransitions
              ? undefined
              : {
                  viewTransitionName: "jim-top-navbar",
                }
          }
        >
          <div
            className="flex w-full justify-center bg-gradient-to-b from-content2 to-transparent px-2"
            style={
              disableViewTransitions
                ? undefined
                : {
                    viewTransitionName: "jim-top-navbar-gradient",
                  }
            }
          >
            <div
              className="w-full max-w-5xl"
              style={
                disableViewTransitions
                  ? undefined
                  : {
                      viewTransitionName: "jim-top-navbar-wrapper",
                    }
              }
            >
              {topNavbar}
            </div>
          </div>
        </nav>
      )}

      <main
        className={cn(
          "flex w-full flex-1 justify-center overflow-x-hidden overscroll-x-none",
          {
            "px-2": !fullscreen,
            "py-4": !fullscreen,
          },
        )}
        style={
          disableViewTransitions
            ? undefined
            : {
                viewTransitionName: "jim-main-content",
              }
        }
      >
        <div
          className={cn("flex w-full flex-col gap-2", {
            "max-w-5xl": !fullscreen,
          })}
        >
          {children}
        </div>
      </main>

      <div className="iphone-safe-inset w-full">
        {bottomNavbar && (
          <nav className="invisible w-full">
            <div className="flex w-full justify-center">
              <div className="w-full max-w-5xl">{bottomNavbar}</div>
            </div>
          </nav>
        )}
      </div>
      {bottomNavbar && (
        <nav
          className="fixed bottom-0 left-0 right-0 z-50 w-full rounded-t-xl bg-content2/70 backdrop-blur-lg"
          style={
            disableViewTransitions
              ? undefined
              : {
                  viewTransitionName: "jim-bottom-navbar",
                }
          }
        >
          <div className="iphone-safe-inset flex w-full justify-center bg-gradient-to-t from-content2 to-transparent">
            <div className="w-full max-w-5xl">{bottomNavbar}</div>
          </div>
        </nav>
      )}
    </div>
  );
}
