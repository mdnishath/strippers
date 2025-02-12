const Container = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="max-w-screen-xl mx-auto">{children}</div>;
};

export default Container;
