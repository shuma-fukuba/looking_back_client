import axios, { AxiosRequestConfig } from 'axios'

interface RequestOption {
  url: string
  params?: any
  data?: any
}

interface Response<T> {
  data: T
  status: number
}

axios.interceptors.request.use((config: AxiosRequestConfig) => {
    config.headers['Bearer'] = ''
    return config
})

export const api = {
  get: async <T>(option: RequestOption): Promise<Response<T>> => {
    const { url, params, data } = option

    try {
      const res = await axios.get<T>(url, {
        params,
        data,
      })
      return {
        data: res.data,
        status: res.status,
      }
    } catch (error) {}
  },
  post: async <T>(option: RequestOption): Promise<Response<T>> => {
    const { url, params, data } = option

    const res = await axios.post<T>(url, data, { params })
    return {
      data: res.data,
      status: res.status,
    }
  },
  put: async <T>(option: RequestOption): Promise<Response<T>> => {
    const { url, data } = option

    try {
      const res = await axios.put<T>(url, data)
      return {
        data: res.data,
        status: res.status,
      }
    } catch (error) {}
  },
  delete: async <T>(option: RequestOption): Promise<Response<T>> => {
    const { url, params, data } = option

    try  {
        const res = await axios.delete<T>(url, {params, data})
        return {
            data: res.data,
            status: res.status
        }
    } catch (error) {}
  },
}
