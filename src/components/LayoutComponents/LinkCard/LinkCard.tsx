import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Button from "@/components/ContainerComponents/Button/button";
import { LinkCardContainer } from "./styles";

interface ILinkCardProps {
  href: string;
  text: string;
  buttonText?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ResponsiveButtonContainer = styled.div`
  width: 8.125rem;
  margin-top: 1rem;
`;

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
        <ResponsiveButtonContainer>
            <Button text={buttonText} variant="primary" onClick={onClick} />
        </ResponsiveButtonContainer>
      )}
    </LinkCardContainer>
  );
}
