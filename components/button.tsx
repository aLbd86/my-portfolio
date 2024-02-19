interface Props {
  children: string;
  link?: string;
  target?: string;
}

export const ButtonS = ({ children, link, target }: Props) => {
  return (
    <a
      href={link}
      target={target}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
      {children}
    </a>
  );
};
