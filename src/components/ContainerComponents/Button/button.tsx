import React from "react";
import { DefaultButton, ToggleButton } from "./styles";

interface IButton {
  text: string;
  secondaryText?: string;
  onClick: any;
  disabled?: boolean;
  variant: string;
  size?: string;
  active?: boolean;
}

// add variant and size props

export default function Button({
  text,
  onClick,
  disabled,
  variant,
  active,
}: IButton) {
  
  return (
    <>
      {variant == "primary" || variant == "secondary" ? (
        <DefaultButton disabled={disabled} onClick={onClick} classname={variant}>
          {text}
        </DefaultButton>
      ) : (
          <ToggleButton onClick={onClick} $active={!!active}>{text}</ToggleButton>
      )}
    </>
  );
}
