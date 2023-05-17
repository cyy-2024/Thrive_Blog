export interface Response<T> {
    code: string;
    message: string;
    data: T
}

// 简化响应类型
export type http<T> = Promise<Response<T>>