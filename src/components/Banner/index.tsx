/*
 * Copyright (c) 2021-2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from "react";
import { default as classNames } from "classnames";
import "./index.scss";
import { Enum } from "../../types";

export const APPEARANCE_TYPE = Enum("success", "error", "info", "warning");

export interface BannerProps {
  appearance: Enum<typeof APPEARANCE_TYPE>;
  message: React.ReactNode;
  dismissBanner?: (event: React.MouseEvent) => void;
  dataQa?: string | null;
}

export const Banner = ({ appearance = APPEARANCE_TYPE.success, message = "", dismissBanner, dataQa }: BannerProps) => {
  return (
    <div
      className={classNames("banner-notification", {
        success: appearance === APPEARANCE_TYPE.success,
        error: appearance === APPEARANCE_TYPE.error,
        info: appearance === APPEARANCE_TYPE.info,
        warning: appearance === APPEARANCE_TYPE.warning,
      })}
      data-qa-id={dataQa}
    >
      <span
        className={classNames("notification-message", {
          success: appearance === APPEARANCE_TYPE.success,
          error: appearance === APPEARANCE_TYPE.error,
          info: appearance === APPEARANCE_TYPE.info,
          warning: appearance === APPEARANCE_TYPE.warning,
        })}
      >
        {message}
      </span>
      {dismissBanner && (
        <i
          className={classNames("icon-x", {
            success: appearance === APPEARANCE_TYPE.success,
            error: appearance === APPEARANCE_TYPE.error,
            info: appearance === APPEARANCE_TYPE.info,
            warning: appearance === APPEARANCE_TYPE.warning,
          })}
          onClick={dismissBanner}
        />
      )}
    </div>
  );
};
