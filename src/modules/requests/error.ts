const handleError = (error: any) => {
  if (!error.response || !error.response.status) {
    return {
      data: {
        detail: 'インターネットに接続されていません',
        error,
      },
      status: 499,
    }
  }

  return {
    data: error.response.data,
    status: error.response.status,
  }
}

export default handleError
