export interface JwtResponse {
    dataUser: {
        nombre: string,
        correo: string,
        role: string,
        valido: boolean,
        estado: boolean
    },
    accessToken: string,
    expiresIn: string
}
