export const getUserNameInitials = (name: string): string | null => {
    const fullName: string[] = name.split(' ')
    let firstNameInitial: string | undefined = fullName.shift()?.charAt(0)
    let lastNameInitial: string | undefined = fullName.pop()?.charAt(0)
    let userInitials =
        firstNameInitial && lastNameInitial
            ? firstNameInitial.concat(lastNameInitial).toUpperCase()
            : null

    return userInitials
}
