import { FC } from 'react'
import FadeRight from './animations/FadeRight';
import FadeLeft from './animations/FadeLeft';

interface Props {
  title: string;
  description: string;
  button: string;
}

const BlockTitle: FC<Props> = ({data}) => {
  return (
    <div className="block_title flex items-center mx-auto max-w-7xl justify-between">
        <FadeRight delay={.5} trigger=".block_title">
          <div className='flex flex-col gap-y-3'>
            <div className="text-4xl">{data.title}</div>
            <div>
              {data.description}
            </div>
          </div>
        </FadeRight>
        <FadeLeft delay={.5} trigger=".block_title">
          <div className="btn light p-3">{data.button}</div>
        </FadeLeft>
    </div>
  )
}

export default BlockTitle