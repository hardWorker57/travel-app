import { FC } from 'react'

interface Props {
  title: string;
  description: string;
  button: string;
}

const BlockTitle: FC<Props> = ({data}) => {
  return (
    <div className="flex items-center mx-auto max-w-7xl justify-between">
        <div className='flex flex-col gap-y-3'>
          <div className="text-4xl">{data.title}</div>
          <div>
            {data.description}
          </div>
        </div>
        <div className="btn light p-3">{data.button}</div>
    </div>
  )
}

export default BlockTitle