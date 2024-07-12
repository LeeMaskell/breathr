import React from "react";
import Link from "next/link";
import Button from "@/components/ContainerComponents/Button/button";
import { LinkCardContainer } from "./styles";
import ResponsiveButtonLayout from "../ResponsiveButtonLayout/ResponsiveButtonLayout";

interface ILinkCardProps {
  href: string;
  text: string;
}

export default function LinkCard({
  href,
  text
}: ILinkCardProps) {
  return (
    <LinkCardContainer>
      <Link href={href}>{text}</Link>
    </LinkCardContainer>
  );
}
