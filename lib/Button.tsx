interface Props {
  children: string;
  link?: string;
  target?: string;
  onClick?: any;
}

export const ButtonS = ({ children, link, target, onClick }: Props) => {
  return (
    <a href={link} target={target} onClick={onClick}>
      <button className="btn // btn-sm md:btn-md lg:btn-lg // btn-outline lg:hover:text-primary font-bold rounded-lg border-2 border-neutral">
        {children}
      </button>
    </a>
  );
};
