export const getUserProfileImage = ({ src, width, quality }: any) => {
    return `https://images.unsplash.com/${src}?w=${width}&q=${quality || 75}`
}
