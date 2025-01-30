import { ReactNode } from 'react'

interface SectionComponentProps {
    children: ReactNode
}

const SctionComponent = ({children}: SectionComponentProps) => {
  return (
    <section className='py-6 px-20'>
        {children}
    </section>
  )
}

export default SctionComponent