import React from "react";

interface IErrorBoundaryComponentProps {
  nameComponent: string;
}

export const ErrorBoundaryComponent = ({
  nameComponent,
}: IErrorBoundaryComponentProps) => {
  return (
    <div className="title-2-bold" style={{ color: "#000" }}>
      Error component: {nameComponent}
    </div>
  );
};
