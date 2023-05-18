interface IContainer {
  children: React.ReactNode;
}

export function Container({ children }: IContainer) {
  return <div className="container">{children}</div>;
}
