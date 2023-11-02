import styled from "styled-components"

const FontStyle = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@600&display=swap");

    .font {
        font-family: "Quicksand", sans-serif;
    }
`

export default function NotFound() {
    return (
        <FontStyle className="w-screen h-screen flex justify-center items-center">
            <div>
                <div className="font text-[250px] text-clr-yellow leading-[250px] ">
                    404
                </div>
                <div className="text-white text-5xl font uppercase text-center">
                    Page Not Found
                </div>
            </div>
        </FontStyle>
    )
}
