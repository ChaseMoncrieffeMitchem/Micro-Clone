import Image from "next/image"

const EmptyOrg = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image 
      src="/empty-org.svg"
      alt="Empty"
      height={200}
      width={200}/>
    </div>
  )
}

export default EmptyOrg
