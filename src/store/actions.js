export function ADD() {
    return {
        type: 'lol',
        value: 2
    }
}
export const plus = () => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(ADD())
        }, 1000)
    }
}
