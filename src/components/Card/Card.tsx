import { PropsWithChildren } from "react";

interface Props {
  title: string;
}

export const Card = ({ title, children }: PropsWithChildren<Props>) => {
  return (
    <section>
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
};
