"use client";

import { useRef, useState } from "react";
import type { ReactNode } from "react";
import { motion, useInView, type Variants } from "motion/react";
import { Search, X, RotateCcw } from "lucide-react";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
  InputGroupButton,
} from "@/components/ui/input-group";

interface EmptyStateAction {
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
}

interface EmptyStateProps {
  initialQuery?: string;
  placeholder?: string;
  titleTemplate?: (query: string) => string;
  description?: string;
  primaryAction?: EmptyStateAction;
  secondaryAction?: EmptyStateAction;
}

const EASE = [0.16, 1, 0.3, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

const EmptyState = ({
  initialQuery = "integration webhook v3",
  placeholder = "Search...",
  titleTemplate = (q) => `No matches for "${q || "your search"}"`,
  description = "Try a different keyword, remove filters, or check for typos in your search term.",
  primaryAction = {
    label: "Browse all",
  },
  secondaryAction = {
    label: "Reset search",
    icon: <RotateCcw className="size-3.5" />,
  },
}: EmptyStateProps) => {
  const [query, setQuery] = useState(initialQuery);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const handleSecondaryClick = () => {
    setQuery("");
    if (secondaryAction?.onClick) {
      secondaryAction.onClick();
    }
  };

  return (
    <div ref={ref} className="w-full py-10 sm:py-16 px-4 flex items-center justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="w-full max-w-md animate-in fade-in-0 duration-300"
      >
        <Card className="w-full bg-background ring-border">
          <CardContent className="px-4">
            <motion.div variants={itemVariants} className="mb-6">
              <InputGroup>
                <InputGroupInput
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={placeholder}
                />
                <InputGroupAddon>
                  <Search className="size-4 text-muted-foreground" />
                </InputGroupAddon>
                {query && (
                  <InputGroupAddon align="inline-end">
                    <InputGroupButton
                      size="icon-xs"
                      variant="ghost"
                      onClick={() => setQuery("")}
                      className="cursor-pointer"
                    >
                      <X className="size-3.5" />
                    </InputGroupButton>
                  </InputGroupAddon>
                )}
              </InputGroup>
            </motion.div>

            <Empty>
              <EmptyHeader>
                <motion.div variants={itemVariants}>
                  <EmptyMedia variant="icon">
                    <Search />
                  </EmptyMedia>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col gap-1.5"
                >
                  <EmptyTitle className="text-base font-medium text-card-foreground">
                    {titleTemplate(query)}
                  </EmptyTitle>
                  <EmptyDescription className="text-sm">
                    {description}
                  </EmptyDescription>
                </motion.div>
              </EmptyHeader>

              <motion.div variants={itemVariants} className="w-full">
                <EmptyContent>
                  <div className="flex items-center gap-2">
                    {secondaryAction && (
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.2, ease: EASE }}
                        className="inline-flex"
                      >
                        <Button
                          variant="outline"
                          onClick={handleSecondaryClick}
                          className="gap-1.5 cursor-pointer"
                        >
                          {secondaryAction.icon}
                          {secondaryAction.label}
                        </Button>
                      </motion.div>
                    )}
                    {primaryAction && (
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.2, ease: EASE }}
                        className="inline-flex"
                      >
                        <Button
                          onClick={primaryAction.onClick}
                          className="cursor-pointer hover:bg-primary/80"
                        >
                          {primaryAction.icon}
                          {primaryAction.label}
                        </Button>
                      </motion.div>
                    )}
                  </div>
                </EmptyContent>
              </motion.div>
            </Empty>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default EmptyState;
