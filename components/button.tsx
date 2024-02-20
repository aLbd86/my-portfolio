interface Props {
  children: string;
  link?: string;
  target?: string;
}

export const ButtonS = ({ children, link, target }: Props) => {
  return (
    <a href={link} target={target}>
      <button className="btn-lg btn-outline m-auto border-4 border-[--color-dark] text-[--color-dark] font-bold rounded-lg">
        {children}
      </button>
    </a>
  );
};
