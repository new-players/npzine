import { PreloadResources } from "./preload-resources";

const ExampleUiLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PreloadResources />
      <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap" rel="stylesheet" />
      {children}
    </>
  );
};

export default ExampleUiLayout;
