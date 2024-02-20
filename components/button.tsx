interface Props {
  children: string;
  link?: string;
  target?: string;
}

export const ButtonS = ({ children, link, target }: Props) => {
  return (
    <a href={link} target={target}>
      <button className="btn sm:btn-sm  lg:btn-lg btn-outline lg:hover:text-primary font-bold rounded-lg border-2 border-neutral">
        {children}
      </button>
    </a>
  );
};
