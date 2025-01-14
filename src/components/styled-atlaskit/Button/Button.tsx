/*
 * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from "react";
import { default as AkButton, ButtonProps as AkButtonProps, ButtonAppearances } from "@atlaskit/button";
import classNames from "classnames";
import "./Button.scss";

export type ButtonAppearance = ButtonAppearances | "outline" | "success";

export interface ButtonProps
  extends Omit<
    AkButtonProps,
    "isDisabled" | "isLoading" | "isSelected" | "spacing" | "type" | "shouldFitContainer" | "autoFocus" | "appearance"
  > {
  children: React.ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
  isSelected?: boolean;
  spacing?: "compact" | "default" | "none";
  type?: "button" | "submit" | "reset";
  shouldFitContainer?: boolean;
  autoFocus?: boolean;
  appearance?: ButtonAppearance;
  dataQa?: string | null;
}

export const Button = ({
  children,
  isDisabled = false,
  isLoading = false,
  isSelected = false,
  spacing = "default",
  type = "button",
  shouldFitContainer = false,
  autoFocus = false,
  appearance = "primary",
  className = "",
  dataQa = null,
  ...props
}: ButtonProps) => {
  const renderButton = () => (
    <AkButton
      className={classNames("styled-atlaskit-button", appearance, className)}
      isDisabled={isDisabled}
      isLoading={isLoading}
      isSelected={isSelected}
      spacing={spacing}
      type={type}
      shouldFitContainer={shouldFitContainer}
      autoFocus={autoFocus}
      appearance={appearance !== "outline" && appearance !== "success" ? appearance : undefined}
      {...props}
    >
      {children}
    </AkButton>
  );
  return !!dataQa ? <div data-qa-id={dataQa} className="styled-atlaskit-button-container">{renderButton()}</div> : renderButton();
};
