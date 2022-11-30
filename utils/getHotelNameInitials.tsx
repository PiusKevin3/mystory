export const getHotelNameInitials = (name: string): string | null => {
    const fullName: string[] = name.split(' ')
    let firstNameInitial: string | undefined = fullName.shift()?.charAt(0)
    let secondNameInitial: string | undefined = fullName[0]?.charAt(0)
    let userInitials =
        firstNameInitial && secondNameInitial
            ? firstNameInitial.concat(secondNameInitial).toUpperCase()
            : null
    return userInitials
}
