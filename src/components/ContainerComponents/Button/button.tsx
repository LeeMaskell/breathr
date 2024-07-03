import React from "react";
import { DefaultButton, ToggleButton } from "./styles";

interface IButton {
  text: string;
  secondaryText?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  variant: string;
  size?: string;
  active?: boolean;
}

// may need secondary button in the future
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
        <DefaultButton disabled={disabled} onClick={onClick} className={variant}>
          {text}
        </DefaultButton>
      ) : (
          <ToggleButton onClick={onClick} $active={!!active}>{text}</ToggleButton>
      )}
    </>
  );
}
