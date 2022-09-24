export const setToken = (token: string) => {
  localStorage.setItem('connectionToken', token)
}

export const fetchToken = () => {
    return localStorage.getItem('connectionToken')
}
