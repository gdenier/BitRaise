type TitleLayoutProps = {
  children?: React.ReactNode
  title: string
}

const TitleLayout = ({ children, title }: TitleLayoutProps) => {
  return (
    <div className="flex w-full flex-col gap-8 px-4 pt-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div>{children}</div>
    </div>
  )
}

export default TitleLayout
