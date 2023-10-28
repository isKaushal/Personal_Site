import { ArrowRight } from '../components/icons'
import styled from 'styled-components'

const WraperButton = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10rem;
    border: 2px solid var(--color-yellow);
`

export default function Button({ label = 'Button', onClick }) {
    return (
        <div className="flex">
            <WraperButton className="overflow-hidden relative after:content-[''] after:w-0 after:h-12 after:bg-clr-yellow after:absolute after:right-0 hover:after:w-full after:transition-all after:duration-[0.8s] after:rounded-l-[10rem] cursor-pointer">
                <div className=" z-[1]  px-4 text-white uppercase font-semibold">
                    {label}
                </div>

                <div className="z-[1] font-bold text-white text-lg w-12 h-12 bg-clr-yellow rounded-full flex justify-center items-center  ">
                    <ArrowRight />
                </div>
            </WraperButton>
        </div>
    )
}
