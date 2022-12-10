export interface baseResponse {
    sk?: string,
    statusCode: number,
    body: string
}

export function makeErr(code: number, message: string, log?: boolean): baseResponse {
    if (log) console.log('LOG::', {code: message})
    return {
        statusCode: code,
        body: JSON.stringify({message: String(message || '')})
    }
}

export const makePgIntArr = (arr: string | number[], returnNull?: any) => {
    if (returnNull && !arr) return null
    // !no ordenar el array
    if (typeof arr === 'string') {
        const ids = arr.split(',').filter(x => x).map(x => parseFloat(x))
        return JSON.stringify(ids).replace('[', '{').replace(']', '}')
    } else if (Array.isArray(arr)) {
        return JSON.stringify(arr || []).replace('[', '{').replace(']', '}')
    }
}