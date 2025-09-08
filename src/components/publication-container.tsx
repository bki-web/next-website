export default function PublicationContainer(props: React.PropsWithChildren) {
  return (
    <div className={"relative flex flex-col gap-6 -top-16 md:-top-48 px-6 md:px-24"}>
      {props.children}
    </div>
  );
}
