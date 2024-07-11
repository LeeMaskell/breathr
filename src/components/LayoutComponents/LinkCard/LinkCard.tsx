import React from "react";
import Link from "next/link";
import Button from "@/components/ContainerComponents/Button/button";
import { LinkCardContainer } from "./styles";
import ResponsiveButtonLayout from "../ResponsiveButtonLayout/ResponsiveButtonLayout";

interface ILinkCardProps {
  href: string;
  text: string;
  buttonText?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function LinkCard({
  href,
  text,
  onClick,
  buttonText,
}: ILinkCardProps) {
  return (
    <LinkCardContainer>
      <Link href={href}>{text}</Link>
      {buttonText && onClick && (
        <ResponsiveButtonLayout width={8.125}>
            <Button text={buttonText} variant="primary" onClick={onClick} />
        </ResponsiveButtonLayout>
      )}
    </LinkCardContainer>
  );
}
