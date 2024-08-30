import { LayoutWrapper } from './styles';

const Layout = props => {
  const { inline, center, children, gap } = props;

  return (
    <LayoutWrapper inline={inline} center={center} gap={gap}>
      {children}
    </LayoutWrapper>
  );
};

export { Layout };