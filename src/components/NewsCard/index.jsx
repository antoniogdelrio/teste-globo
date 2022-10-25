import { Typography } from "../Typography"

export const NewsCard = ({
    imageURL,
    title,
    url,
    isVideo
}) => {
    return (
        <a className="flex flex-col mb-4" href={url} target="_blank">
            <div className="mb-[15px] relative">
                <img width="264" height="144" src={imageURL} />
                {isVideo ? <div data-testid="video-icon" className="absolute top-[80px] left-[16px] rounded-full p-3 bg-white">
                    <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.5 9.13398C17.1667 9.51888 17.1667 10.4811 16.5 10.866L1.5 19.5263C0.833331 19.9112 -9.36738e-07 19.4301 -9.03088e-07 18.6603L-1.45985e-07 1.33975C-1.12336e-07 0.569945 0.833334 0.0888202 1.5 0.47372L16.5 9.13398Z" fill="#DE771C"/>
                    </svg>
                </div> : null}
            </div>
            <div className="max-w-[264px]">
                <Typography size="h2" className="text-[#EC7D00]">{title}</Typography>
            </div>
        </a>
    )
}

export default {}
