import Image from 'next/image'

function Main({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJS e TailwindCSS'
}) {
  return (
    <main className="bg-[#06092b] text-white w-full h-full p-12 text-center flex flex-col items-center justify-center">
      <Image
        src="/img/logo.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        className=""
      />

      <h1 className="text-4xl">{title}</h1>

      <h2 className="text-xl font-normal">{description}</h2>

      <Image
        src="/img/hero-illustration.svg"
        alt="Hero Illustration"
        width={300}
        height={100}
        className="mt-12 w-[min(30rem, 100%)]"
      />
    </main>
  )
}

export default Main
